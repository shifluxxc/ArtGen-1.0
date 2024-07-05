import React, { useEffect, useState } from 'react';
import { fetchUser, logout } from '../service/authService';

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      setUser(user);
    };
    getUser();
  }, []);

  const handleLogout = () => {
    logout().then(() => setUser(null));
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.image} alt="User profile" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <a href="/auth/google">Login with Google</a>
      )}
    </div>
  );
};

export default Auth;
