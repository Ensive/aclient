import './Tag.css'
import React, { PropTypes } from 'react'

const { string } = PropTypes
const propTypes = {
  tag: string
}

function Tag({ tag }) {
  return (
    <li className='Tag'>
      <a href='#'>#<span className='TagText'>{tag}</span></a>
    </li>
  )
}

Tag.propTypes = propTypes

export default Tag
