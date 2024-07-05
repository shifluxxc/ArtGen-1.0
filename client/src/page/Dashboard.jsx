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
    <div className="max-w-7xl mx-auto border-4 border-black bg-gradient-to-r from-black via-black to-blue-900">
      <div className='flex flex-col items-center '>
        <h1 className="font-extrabold text-white text-[32px] text-center ">Your Generated images</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
        {user.images && user.images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Generated ${index}`} className="w-full h-auto rounded" />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
