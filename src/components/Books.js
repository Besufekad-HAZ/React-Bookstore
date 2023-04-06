import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemove } from '../redux/books/Slice-Book';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <div className="book-buttons">
        <button type="button" onClick={dispatch(bookRemove(book.id))}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
