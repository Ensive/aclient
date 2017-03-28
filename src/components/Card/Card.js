import './Card.css'
import React, { PropTypes } from 'react'

const { any, string, element, oneOfType, arrayOf, node } = PropTypes
const propTypes = {
  // TODO: fix 'any' hack
  img: any,
  meta: element,
  title: string.isRequired,
  briefText: oneOfType([string, element]),
  body: oneOfType([string, element]),
  children: oneOfType([
    arrayOf(node),
    node
  ])
}

function Card ({ img, meta, title, briefText, body, children }) {
  return (
    <div className='Card'>
      {img && <img className='CardImage' src={img} alt='' />}
      <div className='CardContent'>
        <header>
          {meta}
          {/* TODO: consider to make it h1 for some cases */}
          <h2 className='CardTitle'>{title}</h2>
        </header>
        {briefText}
        <hr className='Divider' />
        {body}
        {children}
      </div>
    </div>
  )
}

Card.propTypes = propTypes

export default Card
