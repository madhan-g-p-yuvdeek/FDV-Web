import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, Card, CardContent, Chip, Grid } from '@material-ui/core';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PersonIcon from '@material-ui/icons/Person';
import * as mockdata from './../mockData'
import ReplyMessage from './ReplyMessage';

const MessageList = ({ inquiryId }) => {
  // Variables
  //const mdParser = new MarkdownIt({ html: true }).use(insert);
  const [replyMessage, setReplyMessage] = useState(false);

  const dispatch = useDispatch();
  const messageData =  mockdata.messagesTestData ; //useSelector((store) => store.communication);
  //const userAccessRole = useSelector((store) => store.user.accessRoles);

  // Functions
  // async function transferInquiryData() {
  //   dispatch(getMessageList(inquiryId));
  // }

  // useEffect(() => { transferInquiryData(); }, [dispatch]);

  const handleCloseReplyMessage = () => {
    setReplyMessage(!replyMessage);
  };

  const displayMessage = (md, index) => (
    <Card key={md.CreateBy} raised style={{ marginBottom: '2px' }}>
      <CardContent>
        <Grid container >
          <Grid item xs={8} >
            <Chip icon={<PersonIcon fontSize="small" />} label={`To ${md.assignee}`} size="small" color="primary" variant="outlined" style={{ marginBottom: '5px' }} /><br />
            <Chip icon={<RecordVoiceOverIcon fontSize="small" />} label={`From ${md.created_by}`} size="small" color="default" variant="outlined" style={{ color: 'black', marginBottom: '5px' }} />
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'right' }} >
            <i style={{ fontSize: '80%' }}>{moment(md.create_date).format('MM/DD/YYYY hh:mm A')}</i>
          </Grid>
          <Grid item xs={12} >
            <MdEditor
              plugins={['full-screen']}
              value={md.message}
              renderHTML={(text) => mdParser.render(text)}
              config={{ view: { md: false, html: true } }}
            />
          </Grid>          
          <Grid item xs={12} style={{ textAlign: 'right', marginTop: '5px' }} >
            <Button variant="outlined" color="primary" onClick={() => handleCloseReplyMessage()}>Reply</Button>
          </Grid>         
        </Grid>
      </CardContent>
    </Card>
  );

  const displayConversation = (messages) => (
    <>
      {messages.conversation.map((r, index) => (displayMessage(r, index)))}
    </>
  );

  return (
    <Grid container>
      
        <Grid item xs={12}>
          <ReplyMessage inquiryId={inquiryId} onClose={handleCloseReplyMessage} />
        </Grid>
     
      <Grid item xs={12}>
        {inquiryId !== null && messageData.messageList !== []
          && messageData.messageList.find((a) => a.inquiryId.includes(inquiryId))
          && displayConversation(messageData.messageList.find((a) => a.inquiryId.includes(inquiryId)))}
      </Grid>
    </Grid>
  );
};

MessageList.defaultProps = {
  inquiryId: null,
};

MessageList.propTypes = {
  inquiryId: PropTypes.string,
};

export default MessageList;
