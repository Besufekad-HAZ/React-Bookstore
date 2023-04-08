import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav className="Nav-parent-container">
    <h1>Bookstore CMS</h1>
    <ul className="nav-container">
      <li>
        <Link to="/"> BOOKS </Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="user_icon">
      <FaRegUserCircle className="fa-icon" />
    </div>
  </nav>
);

export default NavBar;
