import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './Redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='436296009214-og0klpve2sp670q216q2q37m40dha9o2.apps.googleusercontent.com'><Provider store={store}>
    <App />
  </Provider></GoogleOAuthProvider>
);
