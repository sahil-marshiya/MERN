import express from "express";

const app = express();
const port = 5000;

app.use("/", (req, res) => {
  res.json({ message: "Hello Express from App" });
});

app.listen(5000, () => {
  console.log(`Starting at port ${port}`);
});
