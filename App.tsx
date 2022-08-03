import React from 'react';
import { Button, Text } from 'react-native';
import { Provider } from 'react-redux';

import {
  SetupStore,
  useAppDispatch,
  useAppSelector,
  LoginAction,
} from '@app/state';

const App: React.FC = (): JSX.Element => {
  const { token } = useAppSelector(state => state.AuthSliceReducer);
  const dispatch = useAppDispatch();

  return (
    <>
      {token == '' ? (
        <>
          <Text>Loading...</Text>
          <Button
            title={'Load'}
            onPress={() =>
              dispatch(
                LoginAction({ username: 'kminchelle', password: '0lelplR' }),
              )
            }></Button>
        </>
      ) : (
        <Text>Hello World!</Text>
      )}
    </>
  );
};

export const AppWrapper: React.FC = (): JSX.Element => {
  return (
    <Provider store={SetupStore()}>
      <App />
    </Provider>
  );
};
