import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from "../server/mongodb/models/User.js";
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/auth/google/callback' , 
  scope: ['profile'],
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }
  const newUser = new User({
    googleId: profile.id,
    displayName: profile.displayName,
    image: profile.photos[0].value
  });
  await newUser.save();
  done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});
