import './Header.css'
import './HeaderLink.css'
import React, { Component } from 'react';

// const {} = PropTypes
// const propTypes = {}

class Header extends Component {
  render() {
    return (
      <div className='Header u-clear'>
        <h1 className='HeaderTitle'>Palo Alto</h1>
        <nav className='HeaderNav'>
          <a className='Header__link Header__link--active' href="#">Home</a>
          <a className='Header__link' href="#">About</a>
          <a className='Header__link' href="#">Archive</a>
          <a className='Header__link' href="#">Contact</a>
        </nav>
      </div>
    );
  }
}

// Header.propTypes = propTypes

export default Header
