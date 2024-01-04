
/* @ts-ignore */
import Bikaft from "../../assets/bikcraft.svg";

import "./styles.css";

const Navbar = () => {
  return (
    <header>
      <nav aria-label="principal">
        <div className="content-image">
          <img src={Bikaft} alt="bikcraft_logo" />
        </div>

        <ul className="navigate list">
          <li>
            <a className="navigate-button">Sobre</a>
          </li>
          <li>
            <a className="navigate-button">Produtos</a>
          </li>
          <li>
            <a className="navigate-button">Lojas</a>
          </li>
          <li>
            <a className="navigate-button">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
