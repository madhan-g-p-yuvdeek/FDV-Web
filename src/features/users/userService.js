import { createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';
//import { getAxiosHeaders } from '../../common/SessionHeaders';

// export const getUserAccess = createAsyncThunk(
//   'user/getUserAccess',
//   async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_AUTH}/v2/token/external?appName=Financial Data Collection`,
//         { headers: getAxiosHeaders() });
//       return data;
//     } catch (error) {
//       return error.response;
//     }
//   },
// );

// export default getUserAccess;

const mockUserAccess ={ 
  userId: '12345',
    roles: { financial_data_collection: ['DATA VIEWER'] },
    accessToken: 'endjfdnfh', 
};

export const getUserAccess =  createAsyncThunk(
  'user/getUserAccess',
  async(obj, {rejectWithValue, fulfillWithValue}) => {
    try{
        const response = await fetch('https://api.github.com/users/hacktivist123');
        if (!response.ok) {
            return rejectWithValue(response.status)
        }
        const data = await response.json();
        console.log  ('date', data);
        return fulfillWithValue(mockUserAccess)
    }catch(error){
        throw rejectWithValue(error.message)
    }
}
)

export default getUserAccess;

