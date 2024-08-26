import mongoose from 'mongoose';

const getValidatedURL = () => {
  const DB_URI = process.env.DATA_BASE;

  if (typeof DB_URI !== 'string' || DB_URI.length <= 0) {
    throw new Error('Invalid DB URI');
  }

  return DB_URI;
};

const activeDB = () => {
  return mongoose.connect(getValidatedURL());
};

export const connectDB = async () => {
  try {
    const mongooseInstance = await activeDB();

    if (mongooseInstance) {
      console.log('DB Connected!');
    } else {
      throw new Error('Could not connect');
    }
  } catch (error) {
    console.error(error);
  }
};
