import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../features/servicesSlice';
import caseStudiesReducer from '../features/caseStudiesSlice';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    caseStudies: caseStudiesReducer,
  },
});
