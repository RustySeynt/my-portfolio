import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">My Portfolio<span>.</span></a>
      <ul className="navigation">
        <li><a href="#banner">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#form">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
