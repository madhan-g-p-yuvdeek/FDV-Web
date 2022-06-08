/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getUserAccess } from './userService';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    isSuccess: false,
    id: null,
    role: null,
    accessToken: null,
    message: '',
  },
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [getUserAccess.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserAccess.fulfilled]: (state, { payload }) => {
      const [role] = payload.roles.financial_data_collection;
      state.loading = false;
      state.isSuccess = true;
      state.id = payload.userId;
      state.role = role;
      state.accessToken = payload.accessToken;
    },
    // eslint-disable-next-line no-unused-vars
    [getUserAccess.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = 'failed';
    },
  },
});

export default userSlice.reducer;
