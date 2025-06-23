import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
// import errorMiddleware from './middlewares/error.middleware.js';
// import authRoutes from './routes/auth.routes.js';
// import userRoutes from './routes/user.routes.js';
// import courseRoutes from './routes/course.routes.js';
// import paymentRoutes from './routes/payment.routes.js';

// dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || '*', // frontend domain
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

// ====== MIDDLEWARES ======
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// ====== ROUTES (API Layer) ======
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/courses', courseRoutes);
// app.use('/api/v1/payments', paymentRoutes);

// Health Check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is live' });
});

// ====== GLOBAL ERROR HANDLER ======
// app.use(errorMiddleware);

export default app;
