import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(
  process.env.MONGO_URL,
  {
  useNewUrlParser: true, 
  useFindAndModify: false
  }
);
const handleError = (error) => console.log(`❌ Error on DB Connection: ${error}`)
const db = mongoose.connection;
const handleOpen = () => console.log("💫 Conntect to DB");

db.once("open", handleOpen);
db.on("error", handleError);