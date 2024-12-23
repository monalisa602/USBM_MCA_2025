const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(201).json({ msg: "Homepage" });
});

//middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send("contact");
});
app.get("/", (req, res) => {
  res.send("service page");
});
// app.post();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});