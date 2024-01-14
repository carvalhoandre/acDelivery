
/* @ts-ignore */
import Bikraft from "../../assets/bikcraft.svg";

import "./styles.css";

const Navbar = () => {
  return (
    <header>
      <nav aria-label="principal">
        <div className="content-image">
          <img src={Bikraft} alt="bikcraft_logo" />
        </div>

        <ul className="navigate list">
          <li>
            <a className="button navigate-button">Sobre</a>
          </li>
          <li>
            <a className="button navigate-button">Produtos</a>
          </li>
          <li>
            <a className="button navigate-button">Lojas</a>
          </li>
          <li>
            <a className="button navigate-button">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;