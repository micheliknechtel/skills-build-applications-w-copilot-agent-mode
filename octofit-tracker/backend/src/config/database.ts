import mongoose from 'mongoose';

const MONGO_PORT = Number(process.env.MONGO_PORT) || 27017;
const MONGO_DB = process.env.MONGO_DB || 'octofit_db';

export const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`;
export const connectDatabase = async (): Promise<typeof mongoose> => mongoose.connect(MONGO_URI);

export { MONGO_DB, MONGO_PORT };
