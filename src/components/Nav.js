import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav className="Nav-parent-container">
    <h1>Bookstore CMS</h1>
    <ul className="nav-container">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        >
          {' '}
          BOOKS
          {' '}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <div className="user_icon">
      <FaRegUserCircle className="fa-icon" />
    </div>
  </nav>
);

export default NavBar;
