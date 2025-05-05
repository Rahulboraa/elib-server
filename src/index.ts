import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
