// doctorsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    addDoctor: (state, action) => {
      state.push(action.payload);
    },
    // Add more doctor-related reducers as needed
  },
});

export const { addDoctor } = doctorsSlice.actions;
export default doctorsSlice.reducer;