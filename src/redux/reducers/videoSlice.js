// videoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.push(action.payload);
    },
    // Add more video-related reducers as needed
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;