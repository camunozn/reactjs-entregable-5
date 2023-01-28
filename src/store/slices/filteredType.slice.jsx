import { createSlice } from '@reduxjs/toolkit';

export const filteredTypeSlice = createSlice({
  name: 'filteredType',
  initialState: '',
  reducers: {
    setFilteredType: (state, action) => {
      const type = action.payload;
      return type;
    },
  },
});

export const { setFilteredType } = filteredTypeSlice.actions;

export default filteredTypeSlice.reducer;
