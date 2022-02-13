import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DATABASE_LOCAL = process.env.DATABASE_LOCAL;

export const ConnectDatabase = () => {
  mongoose
    .connect(DATABASE_LOCAL, {})
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((e) => {
      console.log(e);
      console.log("DB could not connect at this time. Shutting down");
      process.exit(1);
    });
};
