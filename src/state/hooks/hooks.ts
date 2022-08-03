import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch, State } from '../store/store.types';

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
