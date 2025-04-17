import express  from 'express';
import dotenv  from 'dotenv';
import cors  from 'cors';
import bodyParser  from 'body-parser';
import cookieParser from 'cookie-parser';
import connectDB  from './config/db.js';

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
// app.use('/api/users', );

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
