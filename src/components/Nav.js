import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="Nav-parent-container">
    <h1>Bookstore CMS</h1>
    <ul className="nav-container">
      <li>
        <Link to="/"> Books </Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
