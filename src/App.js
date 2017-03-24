import React, { Component } from 'react';
import PostsContainer from './PostsContainer'
import logo from './logo.svg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Blog posts</h2>
          </div>
          <h3>The list of posts goes here</h3>
          <PostsContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
