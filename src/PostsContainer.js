import React, { Component, PropTypes } from 'react'
import Post from './Post'

import posts from '../data/posts.json'
import './PostsContainer.css'

// const { object, arrayOf } = PropTypes
// const propTypes = {
//
// }

class PostsContainer extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   posts: []
    // };
  }

  componentDidMount() {

  }

  handleClick(e) {
    console.log("click", e);
    console.log('HELLO WORLD!!')
  }

  render() {
    return (
      <div className="PostsContainer">
        {posts.map(post => <Post key={post.id} { ...post} />)}
      </div>
    )
  }
}

// PostsContainer.propTypes = propTypes

export default PostsContainer
