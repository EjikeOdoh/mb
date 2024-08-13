import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  date: '',
  time: '',
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setAppointmentTime: (state, action) => {
      state.time = action.payload;
    },
    setAppointmentDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {setAppointmentDate, setAppointmentTime} = scheduleSlice.actions;

export const selectAppointmentDate = state => state.schedule.date;
export const selectAppointmentTime = state => state.schedule.time;

export default scheduleSlice.reducer;
