import axios from "axios";
import { useState } from "react";

function Posts({ post }) {
  const [title, setTitle] = useState("");
  console.log(post);

  async function CreateCommentHandler(e) {
    e.preventDefault();
    await axios.post(`http://localhost:4001/comment/${post.id}`, {
      title: title,
    });
    setTitle("");
  }

  return (
    <>
      <div className="bg-red-400 w-1/4 p-4 rounded-md" key={post.id}>
        <h1 className="text-2xl mb-2 text-white">{post.title}</h1>

        <ul className="mb-5">
          {post.comments.map((comment, i) => (
            <li key={comment.id}>
              {i + 1} - {comment.title}
            </li>
          ))}
        </ul>

        <form onSubmit={CreateCommentHandler}>
          <label htmlFor="comment" className="text-lg">
            Post Comment
          </label>
          <br />
          <input
            type="text"
            id="comment"
            placeholder="Post your comment!"
            onChange={(e) => setTitle(e.target.value)}
            required
            value={title}
            className="my-2 border-1 w-full p-1 rounded-md text-sm text-grey-700 bg-white outline-0 focus:border-2 focus:box-border"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 px-5 py-2 mt-2 text-md text-white rounded-md"
          >
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
}

export default Posts;
