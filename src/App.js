import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';

const App = () => {
  const { user, isAuthenticated: isAuth0Authenticated ,logout} = useAuth0();
console.log(user)
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (!isAuth0Authenticated ) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome</h1>
       <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
