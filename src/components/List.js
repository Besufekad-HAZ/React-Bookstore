import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/Slice-Book';
import Books from './Books';

const ListBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.listBooks);
  const isLoading = useSelector((state) => state.books.isLoading);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Wait a moment...Loading!</h1>;
  }

  return (
    <ul className="books-container">
      {books && books.map((book) => <Books key={book.item_id} book={book} />)}
    </ul>
  );
};

export default ListBooks;
