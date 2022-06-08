import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//import moment from 'moment';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Grid, Typography } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FaceIcon from '@material-ui/icons/Face';
import OpenIcon from '@material-ui/icons/AssignmentLate';


const InquiryDetails = ({ data }) => {
  // Variables
  const dispatch = useDispatch();
  const [localReadBy, setLocalReadBy] = useState(false);
 // const userProfile = useSelector((store) => store.user);
  const [retrieveMessages, setRetrieveMessages] = useState(false);

  // Functions
  

  const isInquiryRead = (listOfInquiryReadBy) => {
    if (listOfInquiryReadBy.includes(userProfile.name) || localReadBy) {
      return true;
    }
    return false;
  };

  const isInquiryAssignee = (user) => {
    if (user.toUpperCase() === userProfile.name.toUpperCase()) {
      return '#47ACFF';
    }
    return '#C3C5C7';
  };

  const handleOnClickAccordion = (inquiryId, readBy) => {
    setRetrieveMessages(true);
    if (!isInquiryRead(readBy)) {
      setLocalReadBy(true);
      transferReadInquiryData({ id: inquiryId, reader: userProfile.name, read: true });
    }
  };

  return (
    <Accordion key={data.id} style={{ backgroundColor: isInquiryRead(data.read_by) ? '' : '#F5F5F5' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ paddingTop: '0px', paddingBottom: '0px' }} onClick={() => { handleOnClickAccordion(data.id, data.read_by); }}>
        <Grid container spacing={0}>
          <Grid item xs={1} style={{ textAlign: 'center' }}>
            <FaceIcon style={{ color: isInquiryAssignee(data.current_assignee) }} />
          </Grid>
          <Grid item xs={9}>
            {' '}
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <Chip icon={<OpenIcon fontSize="small" />} label={data.status} clickable style={{ backgroundColor: '#00AE14' }} />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails style={{ paddingTop: '0px' }}>
        {(retrieveMessages) && <MessageList inquiryId={data.id} />}
      </AccordionDetails>
    </Accordion>
  );
};

InquiryDetails.defaultProps = {
  data: [],
};

InquiryDetails.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default InquiryDetails;
