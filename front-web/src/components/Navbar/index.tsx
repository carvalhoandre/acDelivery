import Logo from "../Logo";
import { Link } from "react-router-dom"; // Import Link from react-router-dom or your preferred routing library

import "./styles.css";

const Navbar = () => {
  return (
    <header>
      <nav aria-label="principal">
        <div className="content-image">
         <Logo />
        </div>

        <ul className="navigate list">
          <li>
            <Link to="/about" className="button navigate-button">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/products" className="button navigate-button">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/stores" className="button navigate-button">
              Lojas
            </Link>
          </li>
          <li>
            <Link to="/contact" className="button navigate-button">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
