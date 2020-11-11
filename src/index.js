import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db';

// Load env vars
dotenv.config({ path: './src/config/config.env' });

// Connect to database
connectDB();

// Router files
import shop from './routes/shop';
import admin from './routes/admin';

const app = express();

// Dev logging middlewares
if ( process.env.NODE_ENV === 'development' ) {
  app.use(morgan('dev'));
}

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Views setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('node_env', process.env.NODE_ENV);

// Cors options
const corsOpts = { origin: process.env.CORS_ORIGIN }

// Mount routers
app.use('/api/v1/shop', cors(corsOpts), shop);
app.use('/api/v1/admin', cors(corsOpts), admin);


export default app;