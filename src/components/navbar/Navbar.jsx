import {useState} from 'react';
import Logo from '../../assets/Logo.png';
import './style.css';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='nav-main'>
      <div className='logo-container'>
        <img src={Logo} alt='Logo' className='logo-image' />
      </div>
      <ul className='nav-links'>
        <li><a href="/restaurants">Restaurants</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/about">About</a></li>
        <li className='dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="#" className='drop-down-page-arrow'>Page <IoIosArrowDown /></a>
          {dropdownOpen && (
            <ul className='dropdown-menu'>
              <li><a href="/page1">Page 1</a></li>
              <li><a href="/page2">Page 2</a></li>
              <li><a href="/page3">Page 3</a></li>
            </ul>
          )}
        </li>
      </ul>
      <div className='auth-section'>
        <button className='auth-button login-button'>Login</button>
        <button className='auth-button signup-button'>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
