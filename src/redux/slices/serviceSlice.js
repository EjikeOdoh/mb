import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  services: [],
  selectedService: {},
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setSelectedService: (state, action) => {
      const service = state.services.find(x => x.id === action.payload);
      state.selectedService = service;
    },
  },
});

export const {setServices, setSelectedService} = serviceSlice.actions;

export const selectServices = state => state.services.services;
export const selectCurrentService = state => state.services.selectedService;

export default serviceSlice.reducer;
