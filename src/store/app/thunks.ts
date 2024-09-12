import {createAsyncThunk} from '@reduxjs/toolkit';

import {IImage, IUser} from './types';

export const fetchImages = createAsyncThunk<
  IImage[],
  number,
  {rejectValue: string}
>('images/fetchImages', async (page, {rejectWithValue}) => {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );
    if (!response.ok) {
      throw new Error('Server responded with an error!');
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
export const fetchUser = createAsyncThunk<IUser, number, {rejectValue: string}>(
  'images/fetchUser',
  async (userId, {rejectWithValue}) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Server responded with an error!');
      }
      const r = await response.json();
      return r.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
