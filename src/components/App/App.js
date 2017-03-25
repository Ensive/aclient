import React, { Component } from 'react';
import Header from '../Header/Header'
import PostsContainer from '../../PostsContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <Header />
          <h3>The list of posts goes here</h3>
          <PostsContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
