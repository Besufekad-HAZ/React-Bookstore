import { useDispatch } from 'react-redux';
import { catagorystatus } from '../redux/catagories/Slice-Catagories';

const BookCategories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="catagory-status"
      onClick={() => dispatch(catagorystatus())}
    >
      Status
    </button>
  );
};
export default BookCategories;
