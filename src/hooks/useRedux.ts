import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store/interface.ts';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {useAppDispatch, useAppSelector};
