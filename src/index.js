import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '@shopify/polaris/styles.css';
import { AppProvider } from '@shopify/polaris';

import store from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ Provider>
  </AppProvider>,
  document.getElementById('root')
);
registerServiceWorker();
