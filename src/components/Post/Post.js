import React, { PropTypes } from 'react'
import Button from '../Button/Button'
// import Request from './core/request'

const { string, number } = PropTypes
const propTypes = {
  title: string,
  body: string,
  author: string,
  views: number
}

function Post({ title, body, author, views, readingTime, createdAt }) {

  function handleClick() {
    // console.log('Go to read post');
    // Request.get('/posts/')
    //   .then(function (response) {
    //     console.log(response);
    //   })

    // Request.post('/posts/', { id: 2 })
    //   .then(function (response) {
    //     if (!response) return false;
    //     console.log(response)
    //   })
  }

  return (
    <article className='Post'>
      <header>
        <time className='PostDate'>{createdAt}</time>
        <span className='PostReadingTime'>{readingTime} min read</span>
        <h2 className='PostName'>
          {title}
        </h2>
      </header>
      <hr className='Divider'/>
      <p className='PostBody'>
        {body}
      </p>

      <div>
        <p><b>Author: </b>{author}</p>
        <p><b>Views: </b>{views}</p>
      </div>

      <Button
        // label='Read More'
        // primary={true}
        // labelStyle={btnStyle}
        // disableTouchRipple={true}
        // hoverColor={'none'}
        onClick={handleClick}>
        Read More
      </Button>
    </article>
  )
}

Post.propTypes = propTypes

export default Post
