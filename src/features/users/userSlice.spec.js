import userReducer from './userSlice';
import { getUserAccess } from './userService';

describe('UserSlice default state', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      loading: false,
      isSuccess: false,
      accessToken: null,
      id: null,
      role: null,
      message: '',
    });
  });
});

describe('UserSlice action types', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      loading: false,
      isSuccess: false,
      accessToken: null,
      id: null,
      role: null,
      message: '',
    };
  });

  it('should set state to pending', async () => {
    const action = getUserAccess.pending;
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should set status to fulfilled', async () => {
    const user = {
      userId: '707813',
      roles: { financial_data_collection: ['DATA VIEWER'] },
      accessToken: 'bearTokenSampleXYZ',
    };

    const action = { type: getUserAccess.fulfilled, payload: user };
    const state = userReducer(initialState, action);
    expect(state).toEqual({
      loading: false, isSuccess: true, id: '707813', role: 'DATA VIEWER', accessToken: 'bearTokenSampleXYZ', message: '',
    });
  });

  it('should set status to failed', async () => {
    const action = {
      type: getUserAccess.rejected.type,
      payload: 'loading error',
    };

    const state = userReducer(initialState, action);
    expect(state).toEqual({
      ...initialState, message: 'failed', loading: false, isSuccess: false,
    });
  });
});
