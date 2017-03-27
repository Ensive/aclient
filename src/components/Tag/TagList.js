import React, { PropTypes } from 'react'
import Tag from './Tag'

const { array } = PropTypes
const propTypes = {
  tags: array
}

function TagList ({tags}) {
  return (
    <ul className='TagList'>
      {tags.map((tag, index) => <Tag key={index} tag={tag} />)}
    </ul>
  )
}

TagList.propTypes = propTypes

export default TagList
