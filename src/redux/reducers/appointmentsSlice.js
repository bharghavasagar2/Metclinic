// appointmentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    // Add more appointment-related reducers as needed
  },
});

export const { addAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;