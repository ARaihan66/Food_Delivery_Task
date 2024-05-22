import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import './style.css';
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleOnHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className='nav-main'>
      <div className='logo-container'>
        <a href='/'><img src={Logo} alt='Logo' className='logo-image' /></a>
      </div>
      <ul className={`nav-links ${hamburger ? 'open' : ''}`}>
      <li><a href="/">Home</a></li>
        <li><a href="/restaurants">Restaurants</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <a href="#" className='drop-down-page-arrow'>Page <IoIosArrowDown /></a>
        </li>
      </ul>
      <div className='auth-section'>
        <button className='auth-button login-button'>Login</button>
        <button className='auth-button signup-button'>Signup</button>
      </div>
      <div className='hamburger-menu' onClick={handleOnHamburger}>
        {hamburger ? <BsXLg /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
}

export default Navbar;





