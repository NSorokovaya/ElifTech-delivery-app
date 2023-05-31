import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from 'redux/store';

import { App } from 'components/App';
import './index.css';

ReactDOM.render(
  <Provider>
    <PersistGate loading={null}>
      <BrowserRouter basename="delivery-app">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
