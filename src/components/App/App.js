import './App.css'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Single from '../../pages/Single'
import Header from '../../components/Header/Header'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <div className='ProgressBar' />
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/posts' component={Home} />
          <Route path='/posts/:id' component={Single} />
        </div>
      </Router>
    )
  }
}

export default App
