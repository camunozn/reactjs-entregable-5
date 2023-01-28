import { configureStore } from '@reduxjs/toolkit';
import userNameSlice from './slices/userName.slice';
import currentPageSlice from './slices/currentPage.slice';
import resultsPerPageSlice from './slices/resultsPerPage.slice';
import filteredTypeSlice from './slices/filteredType.slice';

export default configureStore({
  reducer: {
    userName: userNameSlice,
    currentPage: currentPageSlice,
    resultsPerPage: resultsPerPageSlice,
    filteredType: filteredTypeSlice,
  },
});
