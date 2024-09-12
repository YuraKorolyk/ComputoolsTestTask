import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {resetAll} from '../reset.ts';
import {fetchImages, fetchUser} from './thunks.ts';
import {IImage, ImagesState, IUser} from './types.ts';

const initialState: ImagesState = {
  images: [],
  page: 1,
  imageError: null,
  imageStatus: 'idle',
  user: null,
  userError: null,
  userStatus: 'idle',
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    resetImages(state) {
      state.images = [];
      state.page = 1;
      state.imageError = null;
      state.imageStatus = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.imageStatus = 'loading';
      })
      .addCase(
        fetchImages.fulfilled,
        (state, action: PayloadAction<IImage[]>) => {
          state.imageStatus = 'succeeded';
          state.images = [...state.images, ...action.payload]; // Append new images
          state.page += 1; // Increment page number for next fetch
        },
      )
      .addCase(fetchImages.rejected, (state, action) => {
        state.imageStatus = 'failed';
        state.imageError = action.error.message ?? 'Failed to fetch images';
      })
      .addCase(fetchUser.pending, state => {
        state.userStatus = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.userStatus = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.userStatus = 'failed';
        state.userError = action.error.message ?? 'Failed to fetch user';
      })
      .addCase(resetAll, () => initialState);
  },
});

export const {resetImages} = imagesSlice.actions;
export default imagesSlice.reducer;
