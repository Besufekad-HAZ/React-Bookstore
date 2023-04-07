import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'Book-1',
    title: 'To Kill a Mockingbird,',
    author: 'Harper Lee',
    category: 'Fiction',
  },
  {
    id: 'Book-2',
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
  },
  {
    id: 'Book-3',
    title: 'The Lord of the Rings',
    author: ' J.R.R. Tolkien',
    category: 'Fiction',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdd: (state, action) => {
      state.push(action.payload);
    },
    bookRemove: (state, action) => {
      const books = [...state];
      state.splice(0, state.length);
      state.push(...books.filter((book) => book.id !== action.payload));
    },
  },
});

export const { bookRemove, bookAdd } = bookSlice.actions;
export default bookSlice.reducer;
