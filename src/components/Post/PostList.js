import './Post.css'
import posts from '../../../data/posts.json'
import React, { Component } from 'react'
import Post from './Post'

// const { object, arrayOf } = PropTypes
// const propTypes = {
//
// }

class PostList extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   posts: []
    // };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='PostList'>
        {posts.map(post => <Post key={post.id} { ...post} />)}
      </div>
    )
  }
}

// PostList.propTypes = propTypes

export default PostList
