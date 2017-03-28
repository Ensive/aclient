import './Button.css'
import React, { PropTypes } from 'react'

const { string } = PropTypes
const propTypes = {
  href: string,
  label: string
}

function Button ({ href, label }) {
  if (href) {
    return <a className='Button' href={href}>{label}</a>
  } else {
    return <button className='Button'>{label}</button>
  }
}

Button.propTypes = propTypes

export default Button
