import React, { Component } from 'react';
import PostsContainer from './PostsContainer'
import Header from './Header'
import './base.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <h3>The list of posts goes here</h3>
          <PostsContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
