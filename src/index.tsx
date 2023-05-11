import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import {BrowserRouter} from 'react-router-dom';
import AppManager from './manager/AppManager';
import { AuthContextProvider } from './Auth/AuthContext';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();