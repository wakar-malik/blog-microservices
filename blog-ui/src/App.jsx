import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import axios from "axios";
import Posts from "./Posts";

function App() {
  const [posts, setPosts] = useState({});
  const [update, setUpdate] = useState(false);

  function UpdateUiHandler() {
    setUpdate((prev) => !prev);
  }

  useEffect(() => {
    function FetchPostsHandler() {
      const { posts } = axios.get("http://localhost:4000/posts");
      setPosts(posts);
    }
    // FetchPostsHandler();
    console.log(update);
  }, [update]);

  const allPosts = Object.values(posts);

  return (
    <div className="p-5">
      <CreatePost updateUi={UpdateUiHandler} posts={allPosts} />

      <div className="mt-8">
        <Posts posts={allPosts} updateUi={UpdateUiHandler} />
      </div>
    </div>
  );
}

export default App;
