import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '6XpfrbaRZ8nDD6eWDL5c';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;
// Initial state
const initialState = {
  bookList: [],
  isLoading: false,
  isBookAdded: false,
  isBookRemoved: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const bookFetch = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const bookDel = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdd: (state, action) => {
      state.bookList.push(action.payload);
    },

    bookRemove: (state, action) => {
      const books = [...state.bookList];
      state.bookList.splice(0, state.bookList.length);
      state.bookList.push(
        ...books.filter((book) => book.id !== action.payload),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookList = Object.keys(action.payload).map((key) => ({
          id: key,
          title: action.payload[key][0].title,
          author: action.payload[key][0].author,
        }));
        return {
          ...state,
          isLoading: false,
          bookList,
        };
      })
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(bookFetch.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
      .addCase(bookFetch.fulfilled, (state) => ({
        ...state,
        isBookAdded: true,
      }))
      .addCase(bookDel.pending, (state) => ({
        ...state,
        isBookRemoved: false,
      }))
      .addCase(bookDel.fulfilled, (state) => ({
        ...state,
        isBookRemoved: true,
      }));
  },
});

export const { bookAdd, bookRemove } = bookSlice.actions;
export default bookSlice.reducer;
