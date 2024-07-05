import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:5173/dashboard');
  }
);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.status(200).send({ message: 'Logged out successfully' }); // Send a success response back to the client
    });
  });
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

export default router;