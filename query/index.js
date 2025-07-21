const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

const posts = {};

app.get("/query", (req, res) => {
  res.json(posts);
});

app.post("/event", (req, res) => {
  const {
    type,
    data: { id, title, postId },
  } = req.body;

  console.log(req.body);

  if (type === "PostCreated") {
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const post = posts[postId];
    post.comments.push({ id, title });
  }

  res.end(`Event received`);
});

app.listen(4003, () =>
  console.log("----- Query service is listening at 4003.....")
);
