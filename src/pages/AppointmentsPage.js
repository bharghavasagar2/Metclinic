import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPatientByIdAsync, fetchPatientsAsync } from '../redux/reducers/patientsSlice.js';

const AppointmentsPage = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (i) => {
    console.log(dispatch(fetchPatientByIdAsync(i)));
    console.log(i)
    dispatch(fetchPatientByIdAsync(i));
  };

  return (
    <div>
      appointmnts
      <button onClick={(e) => handleButtonClick(1)}>Set Data</button>
      <button onClick={(e) => handleButtonClick(2)}>Welcome bro</button>
    </div>
  );
};

export default AppointmentsPage;
