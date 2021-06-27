import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*
Allen - Had to remove <React.StrictMode> tag
https://github.com/mui-org/material-ui/issues/13394#issuecomment-433357852
*/