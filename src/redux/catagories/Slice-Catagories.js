// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    catagorystatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Initializing Catagories');
      }
    },
  },
});

export const { catagorystatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
