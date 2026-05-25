import '../styles/Header.css';
import logo from '../assets/images/logo.png';

export const Header = () => {
    return (
        <div id="header">
            <div className='header_list'>
                <li><a href="/" className='list_element'><img className='header_logo' src={logo} alt="Logo" /></a></li>
            </div>
        </div >
    )
}