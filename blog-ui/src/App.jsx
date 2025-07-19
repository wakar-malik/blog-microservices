import { useEffect, useState, useCallback } from "react";
import CreatePost from "./CreatePost";
import axios from "axios";
import Posts from "./Posts";

function App() {
  const [posts, setPosts] = useState({});
  const [update, setUpdate] = useState(false);

  const UpdateUiHandler = useCallback(() => {
    setUpdate((prev) => !prev);
  }, []);

  useEffect(() => {
    async function FetchPostsHandler() {
      const { data } = await axios.get("http://localhost:4000/post");
      setPosts(data);
    }
    FetchPostsHandler();
  }, [update]);

  const allPosts = Object.values(posts);

  return (
    <div className="p-5">
      <CreatePost updateUi={UpdateUiHandler} />

      <div className="mt-8 flex gap-5 flex-wrap">
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
            <Posts post={post} updateUi={UpdateUiHandler} key={post.id} />
          ))
        ) : (
          <h1 className="text-3xl">Start Creating Posts..........</h1>
        )}
      </div>
    </div>
  );
}

export default App;
