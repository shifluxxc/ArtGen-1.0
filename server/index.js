import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import './passportConfig.js';
import authRoutes from './routes/authRoutes.js';
import getUser from './routes/getuser.js';

dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  // Adjust cookie settings as per your requirements
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // Allow cookies or authorization headers to be sent cross-origin
}));

app.use('/', authRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/', getUser);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from ArtGen-1.0',
  });
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
