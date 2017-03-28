import './Header.css'

import React from 'react'
import HeaderLink from './HeaderLink'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='Header u-clear'>
      <h1 className='HeaderTitle'>
        <Link className='Text Text--x-large Text--bold Text--italic' to='/'>Palo Alto</Link>
      </h1>
      <nav className='HeaderNav'>
        <HeaderLink activeOnlyWhenExact to='/' label='Home' />
        <HeaderLink to='/about' label='About' />
        <HeaderLink to='/archive' label='Archive' />
        <HeaderLink to='/contact' label='Contact' />
      </nav>
    </div>
  )
}

// Header.propTypes = propTypes

export default Header
