
import { MuiThemeProvider } from '@material-ui/core';
import { createGenerateClassName } from '@material-ui/core/styles';
import { theme } from './assets/theme'
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import React from 'react';
import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import './index.css';

const generateClassName = createGenerateClassName();

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <JssProvider generateClassName={generateClassName}>
        <Provider store={store}>
          <App />
        </Provider>
      </JssProvider>
    </MuiThemeProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);


