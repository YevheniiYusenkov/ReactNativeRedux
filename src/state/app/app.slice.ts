import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '@app/state';

const initialState: AppState = {
  isLoading: true,
};

export const AppSlice = createSlice({
  name: 'AppSlice',
  initialState,
  reducers: {
    setLoading(state: AppState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default AppSlice.reducer;
