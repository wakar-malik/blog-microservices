import axios from "axios";
import { useState } from "react";

function CreatePost({ updateUi }) {
  const [title, setTitle] = useState("");

  function CreatePostHandler(e) {
    e.preventDefault();
    // axios.post("http://localhost:4000/posts", { title });

    setTitle("");
    updateUi();
  }

  return (
    <form
      onSubmit={CreatePostHandler}
      className="bg-red-300 w-1/2 p-4 rounded-md"
    >
      <label htmlFor="post" className="text-2xl">
        Create Post
      </label>
      <br />
      <input
        type="text"
        id="post"
        placeholder="Enter your post!"
        onSubmit={(e) => setTitle(e.target.value)}
        className="my-5 border-1 w-full p-2 rounded-md text-lg text-grey-700 bg-white outline-0 focus:border-2 focus:box-border"
        required
      />
      <br />
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-500 px-5 py-1 text-normal text-white rounded-md"
      >
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
