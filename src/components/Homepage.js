import { useState } from 'react';
import BooksForm from './Form';
import ListBooks from './List';

const Homepage = () => {
  const [books, setBooks] = useState([
    {
      id: Math.random(),
      title: ' In Search of Lost Time',
      author: 'Marcel Proust',
    },
    { id: Math.random(), title: 'Hamlet', author: 'William Shakespeare' },
  ]);

  return (
    <>
      <ListBooks books={books} />
      <BooksForm setBooks={setBooks} />
    </>
  );
};

export default Homepage;
