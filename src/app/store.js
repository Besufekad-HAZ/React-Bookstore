import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../feature/Slice-Book';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
