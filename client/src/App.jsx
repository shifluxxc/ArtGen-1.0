import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests
import { Home, CreatePost, Dashboard } from '../src/page'; // Adjust path to pages folder
import Footer from './components/Footer';
import { logout } from './service/authService'; // Adjust path to logout service
import Navbar from './components/Navbar'; // Adjust path to Navbar component

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/current_user', {
          withCredentials: true  // Ensure credentials (like cookies) are sent with the request
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUser();
  }, []);
  
  const handleLogout = async () => {
    try {
      await logout(() => setUser(null));
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={handleLogout} />
      <main className="sm:p-8 px-4 py-8 w-full bg-black min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
