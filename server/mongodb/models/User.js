import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  image: String,
  images: [String]  // Array of strings to store URLs for images generated by the user
});

const User = mongoose.model('User', userSchema);
export default User;
