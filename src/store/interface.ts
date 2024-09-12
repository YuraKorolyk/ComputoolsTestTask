import {store} from './store.ts';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IThunkError {
  httpCode: number;
  message: string;
  status: string;
}
export interface IThunkData<T> {
  data: T;
}
