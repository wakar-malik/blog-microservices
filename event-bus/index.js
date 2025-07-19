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

  await axios.post("http://localhost:4000/event", req.body); // post service
  await axios.post("http://localhost:4001/event", req.body); // comment service
  await axios.post("http://localhost:4002/event", req.body); // event-bus

  res.end("event received");
});

app.post("/event", (req, res) => {
  const { type } = req.body;
  console.log("🔴", type);

  res.end("event received");
});

app.listen(4002, () => console.log("Event-bus is listening at 4002......"));
