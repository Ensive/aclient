import './Button.css'
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const { string } = PropTypes
const propTypes = {
  to: string,
  label: string
}

function Button ({ to, label }) {
  if (to) {
    return <Link className='Button' to={to}>{label}</Link>
  } else {
    return <button className='Button'>{label}</button>
  }
}

Button.propTypes = propTypes

export default Button
