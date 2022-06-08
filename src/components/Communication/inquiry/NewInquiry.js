import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Checkbox, Chip, Container, FormControl, FormControlLabel, Grid, IconButton,
  Input, InputLabel, ListItemText, MenuItem, Popover, Select, TextField, Typography,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { issueIdentifierList } from '../../../common/enums';


const boxStyle = {
  padding: '10px',
  bgcolor: '#FFF',
  border: '1px solid #D3D3D3',
  boxShadow: 24,
};

const editorcontainer = {
  height: '300px',
};
const NewInquiry = ({ openModal, anchorEl, onClose }) => {
  // Variables
  // const mdParser = new MarkdownIt({ html: true }).use(insert);
  const defaultInquiryData = {
    group_code: '',
    states: [],
    assignee: '',
    identifier: '',
    observation: '',
    observation_number: '',
    experience: false,
    message: { value: '' },
  };
  const dispatch = useDispatch();
  const [initialClickSave, setInitialClickSave] = useState(false);
  const [inquiryData, setInquiryData] = useState(defaultInquiryData);
  //const userProfile = useSelector((store) => store.user);
  //const lookupData = useSelector((store) => store.lookups);
  //const { quill, quillRef } = useQuill();

  

  // useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (delta, oldDelta, source) => {
  //       // console.log(`getText=${quill.getText()}`); // Get text only
  //       // console.log(`getContents =${quill.getContents()}`); // Get delta contents
  //       // console.log(`quill.root -delta= ${quill.root.innerHTML}`); // Get innerHTML using quill
  //       console.log(`quillRef= ${quillRef.current.firstChild.innerHTML}`); // Get innerHTML using quillRef
  //       const og = { ...inquiryData };
  //       og.message = { value: quill.root.innerHTML };
  //       setInquiryData(og);
  //     });
  //   }
  // }, [quill]);

  async function transferInquiryData(data) {
    await dispatch(setInquiry(data));
    await dispatch(getInquiryList());
    onClose();
  }

  function validForm() {
    if (inquiryData.group_code < 5) return false;
    if (inquiryData.states.length < 1) return false;
    if (inquiryData.assignee.trim() === '') return false;
    if (inquiryData.identifier.trim() === '') return false;
    if (inquiryData.observation.trim() === '') return false;
    if (inquiryData.observation_number.length < 4) return false;
    if (inquiryData.message.value.trim() === '') return false;
    return true;
  }

 

  const handleClickSave = (e) => {
    console.log(quillRef);
    setInitialClickSave(true);
    if (validForm()) {
      const data = {
        group_code: parseInt(inquiryData.group_code, 10),
        group_name: 'TEST GROUP NAME',
        states: inquiryData.states,
        identifier: inquiryData.identifier,
        observation: inquiryData.observation,
        observation_number: inquiryData.observation_number,
        status: 'Open',
        created_by: userProfile.name,
        messages: [{
          created_by: userProfile.name,
          assignee: inquiryData.assignee,
          message: inquiryData.message.value,
        }],
      };
      //transferInquiryData(data);
      //setInquiryData(defaultInquiryData);
      setInitialClickSave(false);
    }
  };

  const handleClickClose = () => {
    setInitialClickSave(false);
    setInquiryData(defaultInquiryData);
    onClose();
  };

  const Editor = () => {
   const { quillRef } = useQuill();
    if (quillRef.current) {
      console.log(quillRef.current);
      // need help how to get editorcontent  and do below steps to save data
      //const og = { ...inquiryData };
      // og.message = { value: quill.root.innerHTML };
      // setInquiryData(og);
    }
    return (
      <div style={{ width: 1000, height: 400 }} id="IdeaDetails">
        <div ref={quillRef} />
      </div>
    );
  };


  return (
    <Popover
      data-testid="NewInquiry-Popover"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={openModal}
      onClose={() => onClose()}
    >
      <Container style={boxStyle}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography data-testid="NewInquiry-Title" variant="h5" color="primary">
              New Inquiry
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'right' }}>
            <IconButton data-testid="NewInquiry-Close-IconButton" onClick={handleClickClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          {initialClickSave && !validForm() && (
          <Grid item xs={12}>
            <Typography data-testid="NewInquiry-Error-Text" variant="body1" color="error">
              Please enter valid required fields
            </Typography>
          </Grid>
          )}
          <Grid item xs={4}>
            <TextField
              label="Carrier Code"
              value={inquiryData.group_code}
              inputProps={{ maxLength: 5, 'data-testid': 'NewInquiry-CarrierCode-TextField' }}
              onChange={(e) => handleChangeForm(e, 'group_code')}
              onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
              error={initialClickSave && inquiryData.group_code.length < 5}
              variant="standard"
              style={{ minWidth: '200px' }}
              required
            />
          </Grid>
          <Grid item xs={8}>
            <FormControl data-test-id="NewInquiry-SelectedStates-FormControl" required error={initialClickSave && inquiryData.states.length < 1}>
              <InputLabel data-test-id="NewInquiry-SelectedStates-Label">State</InputLabel>
              <Select
                value={inquiryData.states}
                onChange={(e) => handleChangeForm(e, 'states')}
                inputProps={{ 'data-testid': 'NewInquiry-SelectedStates-Select' }}
                input={<Input />}
                renderValue={(selected) => (
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {selected.map((value) => (
                      <Chip key={`SelectedStates-${value}`} label={value} color="primary" style={{ marginRight: '3px', marginTop: '2px' }} />
                    ))}
                  </div>
                )}
                style={{ minWidth: '200px', maxWidth: '300px' }}
                multiple
                fullWidth
              >
                
                  <MenuItem>
                    
                   States
                  </MenuItem>
              
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl required error={initialClickSave && inquiryData.assignee === ''}>
              <InputLabel id="NewInquiry-Recipient-Label">Recipient</InputLabel>
              <Select
                data-testid="NewInquiry-Recipient-Select"
                value={inquiryData.assignee}
                onChange={(e) => handleChangeForm(e, 'assignee')}
                style={{ minWidth: '200px ', maxWidth: '300px' }}
                variant="standard"
              >
                
                    <MenuItem>'John Doe'</MenuItem>
                  
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <FormControl data-test-id="NewInquiry-IssueIdentifier-FormControl" required error={initialClickSave && inquiryData.identifier.length < 1} >
              <InputLabel data-test-id="NewInquiry-IssueIdentifier-Label">Inquiry Identifier</InputLabel>
              <Select
                data-testid="NewInquiry-IssueIdentifier-Select"
                value={inquiryData.identifier}
                onChange={(e) => handleChangeForm(e, 'identifier')}
                style={{ minWidth: '200px ', maxWidth: '600px' }}
                variant="standard"
                fullWidth
              >
                {issueIdentifierList.map((c) => (
                  <MenuItem
                    data-test-id={`NewInquiry-IssueIdentifierCode${c.issueIdentifierName}-MenuItem`}
                    key={`IdentifierMenuItem-${c.issueIdentifierName}`}
                    value={c.issueIdentifierName}
                  >
                    {c.issueIdentifierName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl data-test-id="NewInquiry-ObservationType-FormControl" required error={initialClickSave && inquiryData.observation.length < 1}>
              <InputLabel id="NewInquiry-ObservationType-InputLabel">Observation Type</InputLabel>
              <Select
                data-testid="NewInquiry-ObservationType-Select"
                value={inquiryData.observation}
                onChange={(e) => handleChangeForm(e, 'observation')}
                style={{ minWidth: '200px ', maxWidth: '300px' }}
                variant="standard"
              >
                
                    <MenuItem> 'Observation'</MenuItem>
                  
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <TextField
                label={`Observation ${inquiryData.observation.includes('Year') ? 'Year' : 'Number'}`}
                data-testid="NewInquiry-ObservationNumber-TextField"
                value={inquiryData.observation_number}
                onChange={(e) => handleChangeForm(e, 'observation_number')}
                inputProps={{ maxLength: (inquiryData.observation === 'Claim Number') ? 18 : 4 }}
                onInput={(inquiryData.observation === 'Claim Number') ? (e) => { e.target.value = e.target.value.replace(/[\W_]+/g, ''); } : (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
                type={(inquiryData.observation === 'Claim Number') ? '' : 'numeric'}
                error={initialClickSave && inquiryData.observation_number.length < 4}
                style={{ minWidth: '200px', maxWidth: '600px' }}
                variant="standard"
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              data-test-id="NewInquiry-ExperiencePeriod-FormControl"
              label="Experience Period"
              labelPlacement="end"
              control={<Checkbox data-test-id="NewInquiry-ExperiencePeriod-Checkbox" checked={inquiryData.experience} onChange={(e) => handleChangeForm(e, 'experience')} />}
              style={{ paddingTop: '14px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color={(initialClickSave && inquiryData.message.value.length < 1) ? 'error' : 'textSecondary'}>Message *</Typography>
            <Editor />
            <br/>
            <br/>
            <br/>            
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption"><i>* Required Fields</i></Typography>
          </Grid>
          <Grid item xs={8} style={{ textAlign: 'right' }}>
            <Button data-testid="NewInquiry-Cancel-Button" color="secondary" variant="text" startIcon={<CloseIcon />} onClick={handleClickClose}>Cancel</Button>
            <Button data-testid="NewInquiry-Send-Button" color="primary" variant="contained" startIcon={<SendIcon />} onClick={handleClickSave}>Send</Button>
          </Grid>
        </Grid>
      </Container >
    </Popover >
  );
};

NewInquiry.defaultProps = {
  openModal: false,
  anchorEl: [],
  onClose: null,
};

NewInquiry.propTypes = {
  openModal: PropTypes.bool,
  anchorEl: PropTypes.instanceOf(Object),
  onClose: PropTypes.func,
};

export default NewInquiry;
