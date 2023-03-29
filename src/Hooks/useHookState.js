import { useContext } from 'react';
import { Context } from '../Providers/StateProvider.jsx';

export const useHookState = () => useContext(Context)