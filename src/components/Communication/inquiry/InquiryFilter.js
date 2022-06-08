import React from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core/';

const InquiryFilter = () => (
  <Grid container spacing={1}>
    <Grid item lg={12}>
      <FormControl>
        <InputLabel>Sort By</InputLabel>
        <Select
          style={{ minWidth: '175px' }}
        >
          <MenuItem value="Latest">Latest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
          <MenuItem value="Carrier">Carrier</MenuItem>
          <MenuItem value="Status">Status</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item lg={12}>
      <TextField
        label="Carrier Code"
        inputProps={{ maxLength: 5 }}
        type="text"
        onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
        style={{ width: '175px', textAlign: 'center', paddingBottom: '12px' }}
      />
    </Grid>
  </Grid>
);

export default InquiryFilter;
