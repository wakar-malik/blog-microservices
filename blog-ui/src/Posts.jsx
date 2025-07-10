import axios from "axios";
import { useState } from "react";

function Posts({ posts, updateUi }) {
  // if (posts.length === 0) {
  //   return <h1 className="text-3xl">Start Creating Posts..........</h1>;
  // }

  return (
    <div className="bg-red-400 w-1/4 p-4 rounded-md">
      <h1 className="text-2xl mb-2 text-white">Post #1</h1>

      <ul className="mb-5">
        <li>1 A comment!</li>
      </ul>

      <CommentForm updateUi={updateUi} />
    </div>
  );
}

export default Posts;

function CommentForm({ updateUi }) {
  const [title, setTitle] = useState("");

  function CreateCommentHandler(e) {
    e.preventDefault();

    // axios.post("http://localhost/comments", { title });
    setTitle("");
    updateUi();
  }

  return (
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
  );
}
