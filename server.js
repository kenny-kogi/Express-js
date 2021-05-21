const express = require("express");
const data = require("./data/data.json");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Successfully connected to port ${PORT}`);
  console.log(data);
});
