// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../service/authService'; // Adjust path as per your project structure
import { iconlogo } from '../assets';
const baseUrl = 'http://localhost:8080'; 

const Navbar = ({ user, onLogout }) => {
  const handleLogout = async () => {
    try {
      await logout(() => {
        // Callback function to execute after logout completes
        onLogout(); // Call onLogout function passed as prop
        // You can perform additional actions after logout here
      });
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error if necessary
    }
  };

  return (
    <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-gray-800">
      <Link to="/">
        <div className='flex flex-row items-center gap-3'>
          <div className='bg-white rounded-md'>
            {/* Adjust logo import as per your project */}
            <img src={iconlogo} alt="logo" className="w-9 object-contain" />
          </div>
          <h1 className='text-[30px] text-white font-bold font-mono'>ArtGen-1.0</h1>
        </div>
      </Link>

      <div className='flex justify-end px-4 gap-3'>
        {user ? (
          <div>
            <Link to="/dashboard" className="font-inter font-medium bg-blue-400 text-black px-4 py-2 rounded-md">Dashboard</Link>
            <button onClick={handleLogout} className="font-inter font-medium bg-red-400 text-black px-4 py-2 rounded-md ml-2">Logout</button>
          </div>
        ) : (
          <a href={`${baseUrl}/auth/google`} className="font-inter font-medium bg-blue-400 text-black px-4 py-2 rounded-md">Login with Google</a>
        )}
        <div>
          <Link to="/create-post" className="font-inter font-medium bg-blue-400 text-black px-4 py-2 rounded-md">Create</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
