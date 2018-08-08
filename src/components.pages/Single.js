import React, { PropTypes } from 'react'
import Post from '../components.common/Post/Post'

const { string, object } = PropTypes
const propTypes = {}

function Single ({ match, posts }) {
  // const post = posts.find({ id: match.params.id })
  console.log(match)
  console.log(match.params.id)
  console.log(posts)
  // return <Post />
  return null
}

Single.propTypes = propTypes

export default Single
