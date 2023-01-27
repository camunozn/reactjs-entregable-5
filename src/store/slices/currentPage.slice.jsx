import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: 1,
  reducers: {
    changeCurrentPage: (state, action) => {
      const currPage = action.payload;
      return currPage;
    },
  },
});

export const { changeCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
