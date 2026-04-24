import '../styles/Header.css';
import logo from '../assets/images/logo.png';

function Header() {
    return (
        <div id="header">
            <div className='header-list'>
                <li><a href="/" className='list-element'><img className='header-logo' src={logo} alt="Logo" /></a></li>
            </div>
        </div >
    )
}

export default Header;