import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from '@app/state';

import { LoginAction } from './auth.actions';

const initialState: AuthState = {
  token: '',
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [LoginAction.fulfilled.type]: (
      state,
      action: PayloadAction<{ token: string }>,
    ) => {
      state.token = action.payload.token;
    },
    [LoginAction.rejected.type]: state => {
      state.token = '';
    },
  },
});

export default AuthSlice.reducer;
