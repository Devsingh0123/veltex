import { createSlice } from '@reduxjs/toolkit';
import { caseStudiesData } from '../data/dummyData';

const initialState = {
  items: caseStudiesData,
  loading: false,
  error: null,
};

const caseStudiesSlice = createSlice({
  name: 'caseStudies',
  initialState,
  reducers: {
    setCaseStudies: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCaseStudies } = caseStudiesSlice.actions;
export default caseStudiesSlice.reducer;
