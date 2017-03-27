import './Text.css'
import React from 'react'

// helper
function getStyle (style) {
  switch (style) {
    case 'bold':
      return 'text--bold'
    case 'normal':
      return 'text--normal'
    default:
      return ''
  }
}

function Text ({ text, textStyle, innerTextStyle, innerText }) {
  let outerModifier = getStyle(textStyle)
  let innerModifier = getStyle(innerTextStyle)

  return (
    <p className={outerModifier ? `text ${outerModifier}` : 'text'}>
      {text}
      {innerText && <span className={innerModifier ? `text ${innerModifier}` : 'text'}>{innerText}</span>}
    </p>
  )
}

export default Text
