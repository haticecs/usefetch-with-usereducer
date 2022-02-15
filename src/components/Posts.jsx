import { Fragment } from "react";
import useFetch from "../hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  // call the useFetch hook
  // destructure the state
  // rename data property as posts
  const { data: posts, isLoading, isError } = useFetch(URL, []);

  return (
    <Fragment>
      {isError && <h2>Something went wrong!</h2>}
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        <ul>
          {posts.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Posts;
