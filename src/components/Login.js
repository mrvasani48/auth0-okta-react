import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect: auth0Login } = useAuth0();

  const handleAuth0Login = () => {
    auth0Login();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleAuth0Login}>Login with Auth0</button>
    </div>
  );
};

export default Login;
