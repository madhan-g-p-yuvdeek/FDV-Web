import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

// import MarkdownIt from 'markdown-it';
// import insert from 'markdown-it-ins';
// import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';


// const ReplyMessage = ({ inquiryId, onReplyCancel, handleReplyRefresh }) => {
const ReplyMessage = ({ inquiryId, onClose }) => {
  // Variables
  const { quill, quillRef } = useQuill();
  //const mdParser = new MarkdownIt({ html: true }).use(insert);
  const defaultReplyMessageData = {
    assignee: '',
    message: { value: '' },
  };

  const dispatch = useDispatch();
  const [initialClickSave, setInitialClickSave] = useState(false);
  const [replyMessageData, setReplyMessageData] = useState(defaultReplyMessageData);
  const userProfile = useSelector((store) => store.user);
 // const lookupData = useSelector((store) => store.lookups);

  // Functions

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        // console.log(`getText=${quill.getText()}`); // Get text only
        // console.log(`getContents =${quill.getContents()}`); // Get delta contents
        // console.log(`quill.root -delta= ${quill.root.innerHTML}`); // Get innerHTML using quill
        // console.log(`quillRef= ${quillRef.current.firstChild.innerHTML}`); // Get innerHTML using quillRef
        const og = { ...replyMessageData };
        og.message = { value: quill.root.innerHTML };
        setReplyMessageData(og);
      });
    }
  }, [quill]);
  // async function transferReplyData(data) {
  //   await dispatch(setReplyMessage(data));
  //   dispatch(getInquiryList());
  //   dispatch(getMessageList(inquiryId));
  // }

  // const handleChangeForm = (el, controlName) => {
  //   const og = { ...replyMessageData };
  //   og[controlName] = el.target.value.trim();
  //   setReplyMessageData(og);
  // };

  function validForm() {
    if (replyMessageData.assignee.trim() === '') return false;
    if (replyMessageData.message.value.trim() === '') return false;
    return true;
  }

  

  const handleImageUpload = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (data) => {
      resolve(data.target.result);
    };
    reader.readAsDataURL(file);
  });

  const handleClickCancel = (e) => {
    setInitialClickSave(false);
    setReplyMessageData(defaultReplyMessageData);
    onClose();
  };

  const handleClickSend = (e) => {
    setInitialClickSave(true);
    if (validForm()) {
      const data = {
        created_by: userProfile.name,
        assignee: replyMessageData.assignee,
        message: replyMessageData.message.value,
      };
     // transferReplyData({ id: inquiryId, replyData: data });
      setInitialClickSave(false);
      setReplyMessageData(defaultReplyMessageData);
      onClose();
    }
  };

  return (
    <Card raised style={{ marginBottom: '2px' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography variant="h5" data-testid="ReplyMessage-header-label" color="primary">
              Reply to Internal
            </Typography>
          </Grid>
          <Grid item xs={9} style={{ textAlign: 'right' }}>
            <FormControl required error={initialClickSave && replyMessageData.assignee === ''}>
              <InputLabel id="ReplyMessage-Recipient-Label">Recipient</InputLabel>
              <Select
                data-testid="ReplyMessage-Recipient-Select"
                value={replyMessageData.assignee}
                onChange={(e) => handleChangeForm(e, 'assignee')}
                style={{ textAlign: 'left', minWidth: '200px ', maxWidth: '600px' }}
                variant="standard"
              >
                
                    <MenuItem>Recpient</MenuItem>
                 
              </Select>
            </FormControl>
          </Grid>
          {initialClickSave && !validForm() && (
            <Grid item xs={12}>
              <Typography data-testid="NewInquiry-Error-Text" variant="body1" color="error">
                Please enter valid required fields
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            {/* <TextField
              label="Message"
              multiline
              minRows="4"
              maxRows="7"
              fullWidth
              variant="outlined"
              onChange={(e) => handleChangeForm(e, 'message')}
              error={initialClickSave && replyMessageData.message.trim() === ''}
              required
              inputProps={{ 'data-testid': 'ReplyMessage-Message-TextField' }}
            /> */}
            <Typography variant="body1" color={(initialClickSave && replyMessageData.message.value.length < 1) ? 'error' : 'textSecondary'}>Message *</Typography>
            <div style={{ width: 800, height: 300 }}>
              <div ref={quillRef} />
            </div>

            {/* <MdEditor
              value={replyMessageData.message.value}
              style={{ height: '400px' }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
              onImageUpload={handleImageUpload}
            /> */}
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            
                <Button data-testid="ReplyMessage-Cancel-Button" color="secondary" variant="text" startIcon={<CloseIcon />} onClick={handleClickCancel}>Cancel</Button>
                <Button data-testid="ReplyMessage-Send-Button" color="primary" variant="contained" startIcon={<SendIcon />} onClick={handleClickSend}>Send</Button>
              
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ReplyMessage.defaultProps = {
  inquiryId: '',
  onClose: null,
};

ReplyMessage.propTypes = {
  inquiryId: PropTypes.string,
  onClose: PropTypes.func,
};

export default ReplyMessage;
