import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookRemove: (state, action) => {
      const books = [...state.books];
      state.books.splice(
        0,
        books.length,
        ...books.filter((book) => book.id !== action.payload),
      );
    },
    bookAdd: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { bookRemove, bookAdd } = bookSlice.actions;
export default bookSlice.reducer;
