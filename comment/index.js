const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const comments = {};

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  console.log("comment get id", id);

  console.log("comments", comments);

  res
    .status(200)
    .header("Content-type", "application/json")
    .json(comments[id] || []);
});

app.post("/comments/:id", (req, res) => {
  const id = crypto.randomUUID();
  const { id: postId } = req.params;
  console.log(req.body);
  console.log(req.params);
  console.log("comment post id", postId);
  const { title } = req.body;

  const comment = comments[postId] || [];
  comment.push({
    id,
    title,
  });
  comments[postId] = comment;

  res
    .status(201)
    .header("Content-type", "application/json")
    .json(comments[postId]);
});

app.listen(4001, () => console.log("Comments listening at 4001......"));
