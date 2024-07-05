import express from 'express';
import User from '../mongodb/models/User.js';

const router = express.Router();

router.get('/current_user', (req, res) => {
  if (!req.user) {
    return res.status(401).send('User not authenticated');
  }

  User.findById(req.user._id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.error('Error fetching user:', err);
      res.status(500).send('Internal server error');
    });
});

router.post('/add_image', (req, res) => {
  if (!req.user) {
    return res.status(401).send('User not authenticated');
  }

  const { imageUrl } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { $push: { images: imageUrl } },
    { new: true }
  )
    .then(user => res.json(user))
    .catch(err => {
      console.error('Error updating user images:', err);
      res.status(500).send('Internal server error');
    });
});

export default router;
