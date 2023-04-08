import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemove, bookDel } from '../redux/books/Slice-Book';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>{book.title}</h2>
      <p>
        Author :
        {' '}
        <u>{book.author}</u>
      </p>
      <div className="book-buttons">
        <button
          type="button"
          onClick={() => dispatch(bookDel(book.item_id))
            .then(() => dispatch(bookRemove(book.item_id)))}
        >
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
