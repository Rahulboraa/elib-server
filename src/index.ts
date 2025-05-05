import express, { json } from "express";
import { config } from "./config/config";

const app = express();
const PORT = config.port;

app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to elib api's" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
