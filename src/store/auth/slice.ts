import {createSlice} from '@reduxjs/toolkit';

import {resetAll} from '../reset.ts';

const initialState = {
  isAuthorized: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuthorized(state) {
      state.isAuthorized = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(resetAll, () => initialState);
  },
});

export default slice.reducer;

export const {setUserAuthorized} = slice.actions;
