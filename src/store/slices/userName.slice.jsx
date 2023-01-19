import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    changeUserName: (state, action) => {
      const user = action.payload;
      return user;
    },
  },
});

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
