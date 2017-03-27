import React, { PropTypes } from 'react'
import Button from '../Button/Button'
import TagList from '../Tag/TagList'
// TODO: remove hack
import postImage from '../../images/post-image-2.jpg'
// import Request from './core/request'

const { string, number } = PropTypes
const propTypes = {
  title: string,
  body: string,
  author: string,
  views: number
}

function Post({ id, title, body, author, category, tags, views, readingTime, createdAt }) {

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
      {id === 2 && <img className='PostImage' src={postImage} alt=""/>}
      <div className='PostContent'>
        {category && <a href='#' className='PostCategory'>{category}</a>}
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

        <footer className='PostFooter u-clear'>
          <Button
            // label='Read More'
            // primary={true}
            // labelStyle={btnStyle}
            // disableTouchRipple={true}
            // hoverColor={'none'}
            onClick={handleClick}>
            Read More
          </Button>
          <TagList tags={tags} />
        </footer>
      </div>
    </article>
  )
}

Post.propTypes = propTypes

export default Post
