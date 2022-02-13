import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { ConnectDatabase } from "./database.js";

dotenv.config();

const app = express();

ConnectDatabase();
const PORT = process.env.PORT || 3112;

app.use(express.static("public"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Server is alive" });
});
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
