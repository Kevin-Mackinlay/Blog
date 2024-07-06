import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware to handle JSON and cookies
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true, // Allow cookies and authorization headers
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Start the server
app.listen(8800, () => {
  console.log('Connected!!');
});
