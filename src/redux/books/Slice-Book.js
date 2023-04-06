import { createSlice } from '@reduxjs/to olkit';

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
