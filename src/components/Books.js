import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemove } from '../redux/books/Slice-Book';

const Books = ({ book }) => {
  const dispatch = useDispatch();
    <li>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button type="button" onClick={dispatch(bookRemove(1))}>
        Remove
      </button>
    </li>;
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
