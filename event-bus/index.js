const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/event-bus", () => {});

app.post("/event-bus", async (req, res) => {
  console.log(req.body);

  await axios.post("http://localhost:4000/post", req.body);
  await axios.post("http://localhost:4001/comment", req.body);
  await axios.post("http://localhost:4002/query", req.body);

  res.end("event received");
});

app.listen(4002, () => console.log("Event-bus is listening at 4002......"));
