import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MongoDBURI, "hkjgh");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDBURI, {
      useNewUrlParser: true,
      //   userUnifiedTopology: true,
    });
    console.log("mongoDB connection: ${conn.connection.host}");
  } catch (error) {
    console.log(error, "error");
    console.log("error: ${error.message}");
    process.exit();
  }
};

export default connectDB;
