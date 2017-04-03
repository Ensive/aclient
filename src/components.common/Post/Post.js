import React, { PropTypes } from 'react'
import Card from '../Card/Card'
import Text from '../Text/Text'
import TagList from '../Tag/TagList'
import Button from '../../components.forms/Button/Button'
// TODO: remove hack
import postImage from '../../images/post-image-2.jpg'
// import Request from './core/request'

const { string, number, array } = PropTypes
const propTypes = {
  id: number,
  title: string.isRequired,
  body: string,
  author: string,
  category: string,
  tags: array,
  views: number,
  readingTime: number,
  createdAt: string
}

function Post ({ id, title, body, author, category, tags, views, readingTime, createdAt }) {
  const getImage = () => id === 2 && postImage
  const renderBody = () => <Text text={body} />

  function renderMeta () {
    return (
      <div>
        <time className='PostDate'>{createdAt}</time>
        <span className='PostReadingTime'>{readingTime} min read</span>
        {category && <a href='#' className='PostCategory'>{category}</a>}
      </div>
    )
  }

  return (
    <article>
      <Card img={getImage()} meta={renderMeta()} title={title} body={renderBody()}>

        <Text text='Author: ' textStyle='bold,tight' innerText={author} innerTextStyle='normal' />
        <Text text='Views: ' textStyle='bold,tight' innerText={views} innerTextStyle='normal' />

        <footer className='PostFooter'>
          <Button label='Read More' to={`/posts/${id}`} />
          <TagList tags={tags} />
        </footer>
      </Card>
    </article>
  )
}

Post.propTypes = propTypes

export default Post
