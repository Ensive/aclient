import './Button.css'
import React, { PropTypes } from 'react'

const { string } = PropTypes
const propTypes = {
  href: string
}

function Button({ href, children }) {
  let element;

  if (href) {
    element = <a className='Button' href={href}>{children}</a>
  } else {
    element = <button className='Button'>{children}</button>
  }

  return element
}

Button.propTypes = propTypes

export default Button
