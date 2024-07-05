import axios from 'axios';

const baseUrl = 'http://localhost:8080'; // Ensure this matches your backend URL

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/current_user`, {
      withCredentials: true  // Ensure credentials (like cookies) are sent with the request
    });
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching user information:', error);
    throw error; // Propagate the error back to the caller
  }
};

export const logout = async (callback) => {
  try {
    const response = await axios.get(`${baseUrl}/logout`, {
      withCredentials: true, // Ensure credentials (like cookies) are sent with the request
    });
    if (response.status === 200) {
      console.log('Logged out successfully');
      window.location.href = 'http://localhost:5173';
      if (callback) {
        callback(); // Execute the callback function after logout completes
      }
    } else {
      console.error('Error logging out:', response);
    }
  } catch (error) {
    console.error('Error logging out:', error);
    throw error; // Propagate the error back to the caller
  }
};
