import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDb connected : ${conn.connection.host}.`.cyan.underline);
  } catch (err) {
    console.log(`error message : ${err.message} `.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
