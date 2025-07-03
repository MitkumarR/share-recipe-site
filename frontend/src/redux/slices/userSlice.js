// store/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  joined: "",
  role: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, action.payload);
      state.isAuthenticated = true;
    },
    clearUser(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
