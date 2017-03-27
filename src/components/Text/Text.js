import './Text.css'
import React, { PropTypes } from 'react'

const { string, number, oneOfType } = PropTypes
const propTypes = {
  text: string,
  textStyle: string,
  innerText: oneOfType([string, number]),
  innerTextStyle: string
}

// helper to get CSS class
function getStyle (style) {
  const defaultClass = 'Text'

  if (!style) {
    return defaultClass
  } else {
    const otherStyles = style.split(',').map(modifier => `Text--${modifier}`).join(' ')
    return `${defaultClass} ${otherStyles}`
  }
}

function Text ({ text, textStyle, innerTextStyle, innerText }) {
  let outerClass = getStyle(textStyle)
  let innerClass = getStyle(innerTextStyle)

  return (
    <p className={outerClass}>
      {text}
      {innerText && <span className={innerClass}>{innerText}</span>}
    </p>
  )
}

Text.propTypes = propTypes

export default Text
