import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URL);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("MongoDB connection failures: ", error);
    process.exit(1);
  }
};

export default connectDB;
