import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route,  Routes, } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/env';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams ={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

