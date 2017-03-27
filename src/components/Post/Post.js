import React, { PropTypes } from 'react'
import Text from '../Text/Text'
import TagList from '../Tag/TagList'
import Button from '../Button/Button'
// TODO: remove hack
import postImage from '../../images/post-image-2.jpg'
// import Request from './core/request'

const { string, number, array } = PropTypes
const propTypes = {
  id: number,
  title: string,
  body: string,
  author: string,
  category: string,
  tags: array,
  views: number,
  readingTime: number,
  createdAt: string
}

function Post ({ id, title, body, author, category, tags, views, readingTime, createdAt }) {
  function handleClick () {
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
      {id === 2 && <img className='PostImage' src={postImage} alt='' />}
      <div className='PostContent'>
        {category && <a href='#' className='PostCategory'>{category}</a>}
        <header>
          <time className='PostDate'>{createdAt}</time>
          <span className='PostReadingTime'>{readingTime} min read</span>
          <h2 className='PostName'>
            {title}
          </h2>
        </header>
        <hr className='Divider' />
        <Text text={body} />

        <div>
          <Text text='Author: ' textStyle='bold,tight' innerText={author} innerTextStyle='normal' />
          <Text text='Views: ' textStyle='bold,tight' innerText={views} innerTextStyle='normal' />
        </div>

        <footer className='PostFooter'>
          <TagList tags={tags} />
          <Button
            // label='Read More'
            // primary={true}
            // labelStyle={btnStyle}
            // disableTouchRipple={true}
            // hoverColor={'none'}
            href='#'
            onClick={handleClick}>
            Read More
          </Button>
        </footer>
      </div>
    </article>
  )
}

Post.propTypes = propTypes

export default Post
