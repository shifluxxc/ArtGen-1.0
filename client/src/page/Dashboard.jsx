import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/current_user', { withCredentials: true });
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching user information');
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No user information available</div>;
  }

  return (
    <div className="text-white bg-black min-h-screen p-5">
      <h1 className="text-white text-2xl mb-5">Welcome, {user.displayName}</h1>
      <img src={user.image} alt="Profile" className="mb-5 rounded-full w-32 h-32" />
      <h2 className="text-white text-xl mb-3">Your Generated Images:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {user.images && user.images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Generated ${index}`} className="w-full h-auto rounded" />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
