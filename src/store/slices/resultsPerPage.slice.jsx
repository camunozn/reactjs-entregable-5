import { createSlice } from '@reduxjs/toolkit';

export const resultsPerPageSlice = createSlice({
  name: 'resultsPerPage',
  initialState: 12,
  reducers: {},
});

export const {} = resultsPerPageSlice.actions;

export default resultsPerPageSlice.reducer;
