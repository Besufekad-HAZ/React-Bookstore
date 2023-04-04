// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from '../feature/Slice-Book';

const store = configureStore({
  reducer: {
    reducer: {},
  },
});

export default store;
