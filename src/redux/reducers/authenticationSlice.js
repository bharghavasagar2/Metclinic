// authenticationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
  token: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.token = null;
    },
    // Add more authentication-related reducers as needed
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;