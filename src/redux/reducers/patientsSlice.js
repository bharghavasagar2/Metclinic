// patientsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteById, getAllData, updateById } from '../commonSlice/commonSlice';
//import { fetchPatientsAsync } from '../actions/patientsActions';

const fetchPatientsAsync = getAllData('patients/fetchPatients', '/posts');
const fetchPatientByIdAsync = getAllData('patients/fetchPatientById', '/posts');
const deletePatientById = deleteById('patients/fetchPatientById', '/posts');
const updatePatientById = updateById('patients/fetchPatientById', '/posts');




const patientsSlice = createSlice({
  name: 'patients',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatientsAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      return action.payload;
    }).addCase(fetchPatientByIdAsync.fulfilled, (state, action) => {
      // Handle the data specific to the get by ID operation
      return action.payload;
    });
  },
});

export { fetchPatientsAsync, fetchPatientByIdAsync };
export default patientsSlice.reducer;
