import PropTypes from 'prop-types';

const Books = ({ book }) => (
  <li>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <button type="button">Remove Book</button>
  </li>
);

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
