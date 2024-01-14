/* @ts-ignore */
import Bikraft from "../../assets/bikcraft.svg";

import "./styles.css";

function Footer() {
  return (
    <footer className="white">
      <div className="footer-content-image">
        <img src={Bikraft} alt="bikcraft_logo" />
      </div>
      
      <h2>© 2022 André Carvalho. All right reserved.</h2>
    </footer>
  );
}

export default Footer;
