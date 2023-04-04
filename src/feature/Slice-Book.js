import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    bookRemove: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    bookAdd: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { bookRemove, bookAdd } = bookSlice.actions;
export default bookSlice.reducer;
