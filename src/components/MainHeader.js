import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/">Shortner</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
