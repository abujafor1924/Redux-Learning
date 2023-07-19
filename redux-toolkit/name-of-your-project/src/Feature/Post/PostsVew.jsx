import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchPosts } from "./PostSlice";

const PostsVew = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading ....</h3>}
      {error && <h3>{error.message}</h3>}
      {posts &&
        posts.map((post) => {
          return (
            <section key={post.id}>
              <h1>{post.title}</h1>
            </section>
          );
        })}
    </div>
  );
};

export default PostsVew;
