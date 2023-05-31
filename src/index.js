import React from 'react';
import { createRoot } from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';

import { App } from 'components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="delivery-app">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
