// import PropTypes from 'prop-types';
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

// ListBooks.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };
export default ListBooks;
