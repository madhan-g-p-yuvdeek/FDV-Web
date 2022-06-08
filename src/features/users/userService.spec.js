import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserAccess } from './userService';
import { getAxiosHeaders } from '../../common/SessionHeaders';

jest.mock('axios');

describe('userService resolved', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call V2 authentication and return user access', async () => {
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        userId: '12345',
        roles: { financial_data_collection: ['DATA VIEWER'] },
        accessToken: 'bearTokenABCxyz',
      },
    });

    const store = configureStore({
      reducer(state = '', action) {
        switch (action.type) {
          case 'user/getUserAccess/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });

    await store.dispatch(getUserAccess());
    expect(getSpy).toBeCalledWith(`${process.env.REACT_APP_AUTH}/v2/token/external?appName=Financial Data Collection`, { headers: getAxiosHeaders() });

    const state = store.getState();
    expect(state).toEqual({ accessToken: 'bearTokenABCxyz', roles: { financial_data_collection: ['DATA VIEWER'] }, userId: '12345' });
  });
});

describe('userService rejected', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call V2 authentication url and return rejected', async () => {
    const getSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce({
      response: 'TIMEOUT',
    });

    const store = configureStore({
      reducer(state = '', action) {
        switch (action.type) {
          case 'user/getUserAccess/rejected':
            return state;
          case 'user/getUserAccess/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });

    await store.dispatch(getUserAccess());
    expect(getSpy).toBeCalledWith(`${process.env.REACT_APP_AUTH}/v2/token/external?appName=Financial Data Collection`, { headers: getAxiosHeaders() });

    const state = store.getState();
    expect(state).toEqual('TIMEOUT');
  });
});
