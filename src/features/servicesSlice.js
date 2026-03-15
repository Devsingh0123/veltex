import { createSlice } from '@reduxjs/toolkit';
import { servicesData } from '../data/dummyData';

const initialState = {
  items: servicesData,
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
