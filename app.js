/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { ConnectDatabase } from './database.js';
import authRouter from './routers/Auth/AuthRouter.js';
import { originUrl } from './services.js';
import orgRouter from './routers/Organisation/OrgRouter.js';

dotenv.config();

const app = express();

ConnectDatabase();
const PORT = process.env.PORT || 3112;

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors({ origin: originUrl, credentials: true }));
app.use(express.json());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.json({ message: 'Server is alive' });
});
app.use(authRouter).use(orgRouter);
app.use('*', (req, res) => {
  res.json({ message: 'Cannot find this route on this server' });
});
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
