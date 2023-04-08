import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdd, bookFetch } from '../redux/books/Slice-Book';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        item_id: Math.random(),
        title,
        author,
        category: 'SCI-FI',
      };
      dispatch(bookFetch(book)).then(() => {
        dispatch(bookAdd(book));
        setTitle('');
        setAuthor('');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="author"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit" className="submit-btn">
        Add Book
      </button>
    </form>
  );
};

export default BooksForm;
