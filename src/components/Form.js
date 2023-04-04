import PropTypes from 'prop-types';
import { useState } from 'react';

const BooksForm = ({ setBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, { title, author }]);
    setTitle('');
    setAuthor('');
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
      <button type="submit" className="submit-btn">Add Book</button>
    </form>
  );
};

BooksForm.propTypes = {
  setBooks: PropTypes.func.isRequired,
};

export default BooksForm;
