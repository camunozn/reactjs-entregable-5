import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: 10,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
