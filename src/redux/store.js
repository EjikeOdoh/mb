import {configureStore} from '@reduxjs/toolkit';
import serviceSlice from './slices/serviceSlice';
import scheduleSlice from './slices/scheduleSlice';
import vehicleSlice from './slices/vehicleSlice';
import addressSlice from './slices/addressSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    services: serviceSlice,
    schedule: scheduleSlice,
    vehicle: vehicleSlice,
    address: addressSlice,
    user: userSlice,
  },
});

export default store;
