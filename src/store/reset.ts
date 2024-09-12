import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'reset',
  initialState: {},
  reducers: {
    resetAll: () => ({}),
  },
});

export const {resetAll} = slice.actions;
export default slice.reducer;
