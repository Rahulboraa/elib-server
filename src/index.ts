import express from "express";
import { config } from "./config/config";
import connectDB from "./config/database";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to elib API's" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`Server running at http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
