import express from 'express';
import { getApiBaseUrl, PORT } from './config/apiUrl';
import { connectDatabase, MONGO_URI } from './config/database';
import apiRouter from './routes';

const app = express();
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
    await connectDatabase();
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
