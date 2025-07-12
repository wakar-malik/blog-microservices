const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).header("Content-type", "application/json").json(posts);
});

app.post("/posts", async (req, res) => {
  const id = crypto.randomUUID();
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4002/event-bus", {
    type: "PostCreated",
    data: { id, title },
  });

  res.status(201).header("Content-type", "text/plain").json(posts[id]);
});

app.listen(4000, () => console.log("Posts listening at 4000......"));
