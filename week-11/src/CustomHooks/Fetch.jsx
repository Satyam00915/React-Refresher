import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";

// const useFetch = () => {
//   const [post, setPost] = useState({});
//   async function getPosts() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/2"
//     );
//     const data = await response.json();
//     setPost(data);
//   }

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return post;
// };

const Fetch = () => {
  const [currentPost, setCurrentPost] = useState(1);

  const { finalData: post, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${currentPost}`
  );

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCurrentPost(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCurrentPost(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setCurrentPost(3);
          }}
        >
          3
        </button>
      </div>
      <p>Todo Id: {post.id}</p>
      <h1>TItle: {post.title}</h1>
      <p>Status: {JSON.stringify(post.completed)}</p>
    </div>
  );
};

export default Fetch;
