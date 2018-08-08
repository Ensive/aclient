import './App.css'

import React, { Component } from 'react'
// TODO: shall we consider to replace BrowserRouter with HashRouter for server rendering ?
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../../components.pages/Home'
import Single from '../../components.pages/Single'
import About from '../../components.pages/About'
import Contact from '../../components.pages/Contact'
import Header from '../Header/Header'

import posts from '../../../data/posts.json'

class App extends Component {
  constructor () {
    super()
    this.state = { posts: posts }
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <div className='ProgressBar' />
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/posts' component={Home} />
          <Route path='/posts/:id' render={(props) => <Single posts={posts} {...props} />} />
          <Route path='/contact/' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
