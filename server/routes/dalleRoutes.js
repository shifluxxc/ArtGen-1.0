import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
const unsplashRoot = 'https://api.unsplash.com';

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Unsplash!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const options = {
      method: 'GET',
      url: `${unsplashRoot}/search/photos`,
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`
      },
      params: {
        query: prompt,
        per_page: 1
      }
    };

    const response = await axios.request(options)
    // console.log(response.data);
    const imageData = response.data.results[0].urls.small;
    // const encodedImgUrl = encodeURIComponent(imageData);
    console.log(imageData); 
    res.status(200).json({ photo: imageData});
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;