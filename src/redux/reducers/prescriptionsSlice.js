// prescriptionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const prescriptionsSlice = createSlice({
  name: 'prescriptions',
  initialState,
  reducers: {
    addPrescription: (state, action) => {
      state.push(action.payload);
    },
    // Add more prescription-related reducers as needed
  },
});

export const { addPrescription } = prescriptionsSlice.actions;
export default prescriptionsSlice.reducer;