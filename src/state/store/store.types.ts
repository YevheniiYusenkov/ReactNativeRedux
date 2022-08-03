import { SetupStore, RootReducer } from './store';

export type State = ReturnType<typeof RootReducer>;
export type Store = ReturnType<typeof SetupStore>;
export type Dispatch = Store['dispatch'];
