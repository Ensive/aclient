import React, { Component } from 'react';
import './Header.css'

// const {} = PropTypes
// const propTypes = {}

class Header extends Component {
  render() {
    return (
      <div className='Header u-clear'>
        <h1>PaloAlto</h1>
        <nav>
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
