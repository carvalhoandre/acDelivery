import Logo from "../Logo";

import "./styles.css";

function Footer() {
  return (
    <footer className="white">
      <div className="footer-content-image">
        <Logo />
      </div>
      
      <h2>© 2022 André Carvalho. All right reserved.</h2>
    </footer>
  );
}

export default Footer;
