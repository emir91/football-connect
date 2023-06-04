import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const uri = process.env.MONGO_DB_URI;

if (!uri) {
  console.error('MongoDB URI not found in environment variables');
  process.exit(1);
}

const connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(uri);
  
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Failed to connect to MongoDB Atlas', error);
      process.exit(1);
    }
  };
  

export default connectDB;
