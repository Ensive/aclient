import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// CSS
import './styles/utils.css'
import './styles/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
