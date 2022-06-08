import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, CardContent, Grid, IconButton,
} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import InquiryFilter from './inquiry/InquiryFilter';
import NewInquiry from './inquiry/NewInquiry';
import InquiryDetails from './inquiry/InquiryDetails';
import * as mockdata from './mockData';
import QuillEditor from './inquiry/QuillEditor' ;
import NewMessage from './inquiry/NewMessage';

//import { getInquiryList } from './CommunicationService';

const CommunicationHub = () => {
  // Variables
  const [openNewInquiry, setOpenNewInquiry] = useState(false);
  const [openNewMessage, setOpenNewMessage] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [hideFilter, setHideFilter] = useState(true);
  const [rotateIcon, setRotateIcon] = useState(false);
  const rotateImg = ({
    transform: 'rotate(360deg)',
    transition: 'transform 250ms ease',
  });

  const dispatch = useDispatch();
  const inquiryListData =  mockdata.inquiriesTestData//useSelector((store) => store.communication);
  //const userAccessRole = useSelector((store) => store.user.accessRoles);

  // Function & Events
  // async function transferInquiryData() {
  //   setRotateIcon(true);
  //   await dispatch(getInquiryList());
  //   setTimeout(() => setRotateIcon(false), 500);
  // }

  //useEffect(() => { transferInquiryData(); }, [dispatch]);

  const handleClickFilter = () => {
    setHideFilter(!hideFilter);
  };

  const handleOpenNewInquiry = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenNewInquiry(true);
  };

  const handleCloseNewInquiry = () => {
    setOpenNewInquiry(false);
  };

  const handleOpenNewMessage = (event) => {
    setAnchorEl2(event.currentTarget);
    setOpenNewMessage(true);
  };

  const handleCloseNewMessage = () => {
    setOpenNewMessage(false);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={hideFilter ? 12 : 9}>
          <Card raised>
            <CardContent>
              <Grid container>
                <QuillEditor/> {' '}  {'    '}
                <Button
                      data-testid="CommunicationHub-NewInquiry-Button"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={handleOpenNewMessage}
                    >
                      New Message
                    </Button> 
                <NewMessage
        openModal={openNewMessage}
        anchorEl={anchorEl2}
        onClose={handleCloseNewMessage}
      />
                <Grid item xs={6}>                  
                    <Button
                      data-testid="CommunicationHub-NewInquiry-Button"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={handleOpenNewInquiry}
                    >
                      New Inquiry
                    </Button>                
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                  {/* <IconButton data-testid="CommunicationHub-Refresh-IconButton" color="primary" onClick={false} >
                    <RefreshIcon size="small" style={(rotateIcon) ? rotateImg : {}} />
                  </IconButton> */}
                  {/* {hideFilter && (
                      <IconButton color="primary">
                        <FilterListIcon color="primary" size="small" onClick={handleClickFilter} />
                      </IconButton>
                  )} */}
                </Grid>
                <Grid container spacing={0} >
                  <Grid item xs={12}>
                    {inquiryListData.inquiryList && inquiryListData.inquiryList.length > 0
                      && inquiryListData.inquiryList.map((i) => (
                        <InquiryDetails key={`InquiryDetail-${i}`} data={i} />
                      ))}
                  </Grid>
                </Grid >
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {!hideFilter && (
          <Grid item xs={3}>
            <Card raised>
              <CardContent style={{ paddingBottom: '1px' }}>
                <Grid item xs={12}>
                  <Button data-testid="CommunicationHub-YourSearch-Button" color="primary" startIcon={<FilterListIcon />} onClick={handleClickFilter}>
                    Your Search
                  </Button>
                </Grid>
                <InquiryFilter />
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
      
      <NewInquiry
        openModal={openNewInquiry}
        anchorEl={anchorEl}
        onClose={handleCloseNewInquiry}
      />
    </>
  );
};

export default CommunicationHub;
