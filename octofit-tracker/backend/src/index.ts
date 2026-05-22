import express from 'express';
import mongoose from 'mongoose';
import { getApiBaseUrl, PORT } from './config/apiUrl';
import apiRouter from './routes';

const app = express();
const MONGO_PORT = Number(process.env.MONGO_PORT) || 27017;
const MONGO_DB = process.env.MONGO_DB || 'octofit_db';
const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`;
const apiBaseUrl = getApiBaseUrl();

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    apiBaseUrl,
    service: 'octofit-backend',
    status: 'ok',
  });
});

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`OctoFit backend listening on port ${PORT}`);
      console.log(`API base URL: ${apiBaseUrl}`);
      console.log(`MongoDB URI: ${MONGO_URI}`);
    });
  } catch (error) {
    console.error('Failed to start backend:', error);
    process.exit(1);
  }
};

void start();
