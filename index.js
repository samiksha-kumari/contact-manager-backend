const express = require("express");
const cors = require("cors");
const { mongoose } = require("./config/database");
const router = require("./config/routes");

const app = express();
const port = 3040;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("contacts information");
});

app.use("/", router);

app.listen(port, () => {
  console.log("listening to the port", port);
});
