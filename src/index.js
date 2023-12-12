import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // joins react app with store
import { configureStore } from '@reduxjs/toolkit';
import reducer from './store/reducer';

const store = configureStore({
  reducer: reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);