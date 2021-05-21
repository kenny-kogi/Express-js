const express = require("express");
const data = require("./data/data.json");

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/newitem", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// app
//   .route("./item")
//   .get((req, res) => {
//     res.send(`successful get request on port ${PORT} `);
//   })
//   .post((req, res) => {
//     res.send(`successful post request on port ${PORT} `);
//   })rs

//   .put((req, res) => {
//     res.send(`successful put request on port ${PORT} `);
//   })
//   .delete((req, res) => {
//     res.send(`successful delete request on port ${PORT} `);
//   });

// app.get("/item/:id", (req, res) => {
//   console.log(req.params.id);
//   const user = Number(req.params.id);
//   res.send(data[user]);
// });

app.listen(PORT, () => {
  console.log(`Successfully connected to port ${PORT}`);
  console.log(data);
});
