import './Button.css'
import React, { PropTypes } from 'react';
const {} = PropTypes
const propTypes = {}

function Button(props) {
  return <button className='Button'>{props.children}</button>
}

Button.propTypes = propTypes

export default Button
