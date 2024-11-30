import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error connecting DB : ${e}`);
  }
};

export default connectToMongoDb;
