import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header-banner">
        <img className="logo" src={logo} alt="logo" />
      </header>
    );
  }
}

export default Header;
