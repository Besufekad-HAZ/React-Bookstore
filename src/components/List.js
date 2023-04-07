import { useSelector } from 'react-redux';
import Books from './Books';

const ListBooks = () => {
  const books = useSelector((state) => state.books);
  return (
    <ul className="books-container">
      {books.map((book) => (
        <Books key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default ListBooks;
