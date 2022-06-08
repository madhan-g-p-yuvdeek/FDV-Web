import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import CommunicationHub from './CommunicationHub';

const style = {
  position: 'inherit',
  top: '75px',
  marginLeft: '20px',
  marginRight: '20px',
};

export default function CommunicationPage() {
  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            data-testid="CommunicationPage-Title"
            variant="h5"
            color="primary"
          >
            Message Center
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CommunicationHub />
        </Grid>
      </Grid>
    </div>
  );
}
