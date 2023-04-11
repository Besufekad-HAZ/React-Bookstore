import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { bookRemove, bookDel } from '../redux/books/Slice-Book';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(10);

  // Progress Handle
  const handleProgress = () => {
    if (percent < 80) {
      setPercent(percent + 15);
    } else setPercent(100);
  };

  const handleRemoveBook = (book) => {
    dispatch(bookDel(book.item_id)).then(() => dispatch(bookRemove(book.item_id)));
  };

  return (
    <li className="book">
      <div className="detail">
        <div className="title">{book.title}</div>
        <button className="author" type="button">
          {book.author}
        </button>
        <div className="book-actions">
          <button className="comments" type="button">
            Comments
          </button>
          <div className="line-2" />
          <button
            className="remove"
            type="button"
            onClick={() => handleRemoveBook(book)}
          >
            Remove
          </button>
          <div className="line-2" />
          <button className="edit" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book_progress">
        <div style={{ width: 60 }}>
          <CircularProgressbar value={percent} />
        </div>
        <div className="progress">
          <span className="Percentage">{`${percent}%`}</span>
          <span className="text-completed">Completed</span>
        </div>
      </div>
      <div className="line" />
      <div className="book-chapter">
        <span className="current-chapter">Current Chapter</span>
        <h2 className="current-lesson">Chapter 17</h2>
        <button
          className="update-progress"
          onClick={handleProgress}
          type="button"
        >
          Update Progress
        </button>
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
