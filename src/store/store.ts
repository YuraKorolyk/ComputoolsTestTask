import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import app from './app/slice';
import auth from './auth/slice';
import {rootPersistConfig} from './configs.ts';
import reset from './reset';

const reducers = combineReducers({
  reset,
  app,
  auth,
});
const rootReducer = (state, action) => {
  return reducers(state, action);
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .prepend()
      .concat(),
});
export const persisStore = persistStore(store);
