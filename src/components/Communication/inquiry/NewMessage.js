import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Checkbox, Chip, Container, FormControl, FormControlLabel, Grid, IconButton,
  Input, InputLabel, ListItemText, MenuItem, Popover, Select, TextField, Typography,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

// import MarkdownIt from 'markdown-it';
// import insert from 'markdown-it-ins';
// import MdEditor from 'react-markdown-editor-lite';
// import 'react-markdown-editor-lite/lib/index.css';
import Quill, { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

import { issueIdentifierList } from '../../../common/enums';


const boxStyle = {
  padding: '10px',
  bgcolor: '#FFF',
  border: '1px solid #D3D3D3',
  boxShadow: 24,
};

const NewMessage = ({ openModal, anchorEl, onClose }) => {
  // Variables
  
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
    const toolbarOptions = [
    ['italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ['clean'], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const { quill, Quill, quillRef } = useQuill({ modules });
  const [editor, setEditor] = useState();
 
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        setEditor(quill.root.innerHTML);
        console.log('quill===>', editor);
      });
    }
  }, [quill]);

  async function transferInquiryData(data) {
   // await dispatch(setInquiry(data));
   // await dispatch(getInquiryList());
    onClose();
  }

  

  const handleChangeForm = (el, controlName) => {
    const og = { ...inquiryData };
    if (controlName === 'observation') {
      og.observation_number = '';
    }
    if (controlName === 'experience') {
      og.experience = !og.experience;
    } else if (!(controlName === 'states' && el.target.value.length > 3)) {
      og[controlName] = el.target.value;
    }
    setInquiryData(og);
  };

  const handleClickSave = (e) => {
    setInitialClickSave(true);
    const data ='';
    
      //transferInquiryData(data);
      //setInquiryData(defaultInquiryData);
      setInitialClickSave(false);
    };
 

  const handleClickClose = () => {
    setInitialClickSave(false);
    //setInquiryData(defaultInquiryData);
    onClose();
  };

  return (
    <Popover
      data-testid="NewInquiry-Popover"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={openModal}
      onClose={()=>setAnchorEl(null)}
      //onClose={() => onClose()}
    >
      <Container style={boxStyle}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography data-testid="NewInquiry-Title" variant="h5" color="primary">
              New Message
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
              value={' '}
              inputProps={{ maxLength: 5, 'data-testid': 'NewInquiry-CarrierCode-TextField' }}
              onChange={(e) => handleChangeForm(e, 'group_code')}
              onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
              variant="standard"
              style={{ minWidth: '200px' }}
              required
            />
          </Grid>
          <Grid item xs={8}>
            <FormControl data-test-id="NewInquiry-SelectedStates-FormControl" required >
              <InputLabel data-test-id="NewInquiry-SelectedStates-Label">State</InputLabel>
              
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl required >
              <InputLabel id="NewInquiry-Recipient-Label">Recipient</InputLabel>
              
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            {' '}
          </Grid>

          <Grid item xs={4}>
            {' '}
          </Grid>
          <Grid item xs={4}>
            {' '}
          </Grid>
          <Grid item xs={4}>
            {' '}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" >Message *</Typography>{' '}
            <Typography variant="body1" >{'    '}</Typography>{' '}
            <div style={{ width: '900px', height: '300px' }} id="editor">
              <div style={{ width: '900px', height: '300px' }} ref={quillRef} value={editor}/>
            </div>
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

NewMessage.defaultProps = {
  openModal: null,
  anchorEl: [],
  onClose: null,
};

NewMessage.propTypes = {
  openModal: PropTypes.bool,
  anchorEl: PropTypes.instanceOf(Object),
  onClose: PropTypes.func,
};

export default NewMessage;
