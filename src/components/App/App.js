import './App.css'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../../components.pages/Home'
import Single from '../../components.pages/Single'
import About from '../../components.pages/About'
import Contact from '../../components.pages/Contact'
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
          <Route path='/contact/' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
