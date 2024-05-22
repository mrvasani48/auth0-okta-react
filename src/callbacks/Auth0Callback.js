import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0Callback = () => {
  const { user,handleRedirectCallback } = useAuth0();
console.log(user)
  React.useEffect(() => {
    handleRedirectCallback(); 
  }, [handleRedirectCallback]);

  return <div>Loading...</div>;
};

export default Auth0Callback;
