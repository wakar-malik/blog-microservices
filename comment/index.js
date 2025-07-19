const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const comments = {};

app.get("/comment/:id", (req, res) => {
  const { id } = req.params;

  res
    .status(200)
    .header("Content-type", "application/json")
    .json(comments[id] || []);
});

app.post("/comment/:id", async (req, res) => {
  const id = crypto.randomUUID();
  const { id: postId } = req.params;
  const { title } = req.body;

  const comment = comments[postId] || [];
  comment.push({
    id,
    title,
  });
  comments[postId] = comment;

  await axios.post("http://localhost:4002/event-bus", {
    type: "CommentCreated",
    data: { id, title },
  });

  res
    .status(201)
    .header("Content-type", "application/json")
    .json(comments[postId]);
});

app.listen(4001, () => console.log("Comments listening at 4001......"));
