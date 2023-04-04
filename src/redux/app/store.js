import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../books/Slice-Book';
import categoriesReducer from '../catagories/Slice-Catagories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
