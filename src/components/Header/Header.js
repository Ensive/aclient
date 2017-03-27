import './Header.css'
import './HeaderLink.css'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// const {} = PropTypes
// const propTypes = {}

class Header extends Component {
  render () {
    return (
      <div className='Header u-clear'>
        <h1 className='HeaderTitle'>
          <a href='#'>Palo Alto</a>
        </h1>
        <nav className='HeaderNav'>
          <Link className='Header__link' to='/'>Home</Link>
          <Link className='Header__link' to='/about'>About</Link>
          <Link className='Header__link' to='#'>Archive</Link>
          <Link className='Header__link' to='#'>Contact</Link>
        </nav>
      </div>
    )
  }
}

// Header.propTypes = propTypes

export default Header
