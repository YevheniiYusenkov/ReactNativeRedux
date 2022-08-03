import { combineReducers, configureStore } from '@reduxjs/toolkit';

import AppSliceReducer from '../app/app.slice';
import AuthSliceReducer from '../auth/auth.slice';

export const RootReducer = combineReducers({
  AppSliceReducer,
  AuthSliceReducer,
});

export const SetupStore = () => {
  return configureStore({
    reducer: RootReducer,
  });
};
