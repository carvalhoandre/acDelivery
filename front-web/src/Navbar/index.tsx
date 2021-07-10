import './styles.css';
import Logo  from './logoP.png';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="main-navbar">
            <img src={Logo} alt="Logo" className="logo" />
            <Link to="/"><p className="brand">ac<strong>delivery</strong></p></Link>
        </nav>
    )
}

export default Navbar;