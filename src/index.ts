import express, { json } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to elib api's" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
