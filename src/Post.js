import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const { object, arrayOf } = PropTypes
const propTypes = {

}

function Post({ title, body, author, views }) {

  function handleClick() {
    console.log('Go to read post');
  }

  return (
    <div>
      <h1 className='PostName'>
        {title}
      </h1>
      <p className='PostDesc'>
        {body}
      </p>

      <div>
        <p>
          <strong>Author: </strong>
          {author}
        </p>
        <p>Views: {views}</p>
      </div>

      <RaisedButton label='Read More' onClick={handleClick} />
    </div>
  )
}

export default Post