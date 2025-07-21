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

  // await axios.post("http://localhost:4000/event", req.body); // post
  // await axios.post("http://localhost:4001/event", req.body); // comments
  await axios.post("http://localhost:4003/event", req.body); // query

  res.end("event received");
});

app.listen(4002, () =>
  console.log("----- Event-bus service is listening at 4002......")
);
