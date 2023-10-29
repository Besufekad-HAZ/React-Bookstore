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
    <section className="form-container">
      <div className="form-title">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit}>
        <input
          className="add-book-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
        />
        <input
          className="add-book-author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book author"
          required
          pattern="([A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ]{1,19} ?){1,10}"
        />
        <button className="add-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default BooksForm;
