import express from "express";
import dotenv from "dotenv";
import { ConnectDatabase } from "./database.js";

dotenv.config();

const app = express();

ConnectDatabase();
const PORT = process.env.PORT || 3112;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
