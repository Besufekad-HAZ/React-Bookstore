import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const endPoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6XpfrbaRZ8nDD6eWDL5c/books';

// Initial state
const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('posts/fetchBooks', async () => {
  const response = await axios.get(endPoint);
  return response.data;
});

//
export const addNewBook = createAsyncThunk(
  'posts/addNewBook',
  async (initialBook, { dispatch }) => {
    const response = await axios.post(endPoint, initialBook);
    dispatch(fetchBooks());
    return response.data;
  },
);

export const deleteBook = createAsyncThunk(
  'posts/deleteBook',
  async (initialBook, { dispatch }) => {
    const response = await axios.delete(
      `${endPoint}/${initialBook}`,
      initialBook,
    );
    dispatch(fetchBooks());
    return response.data;
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdd: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    bookRemove: (state, action) => {
      state = state.filter((book) => book.id !== action.payload);
      return state;
    },
  },
});

export const { bookRemove, bookAdd } = bookSlice.actions;
export default bookSlice.reducer;
