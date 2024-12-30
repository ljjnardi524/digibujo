import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><div className='navbar-logo-first'>[DIGI </div><div className='navbar-logo-second'> bujo</div><div className='navbar-logo-first'>]</div></div>
      <ul className="navbar__links">
        <li className="navbar__item"><a href="/home">Home</a></li>
        <li className="navbar__item"><a href="https://www.google.com">Get Started!</a></li>
        {/*<li className="navbar__item"><a href="/nosotros">About Us</a></li>
        <li className="navbar__item"><a href="/servicios">Services</a></li>
        <li className="navbar__item"><a href="/contacto">Contact Us</a></li>*/}
      </ul>
      <div className="navbar__toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
