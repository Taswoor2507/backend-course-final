import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Database successfully connected on ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error to connection in database -->", error);
    process.exit(1);
  }
};

export default connectDB;
