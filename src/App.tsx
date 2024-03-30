import { FormEvent, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";
import PostsCard from "./components/PostsCard";

function App() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();

  // console.log("isLoading: ", isLoading);
  // console.log("isError: ", isError);
  // console.log("isSuccess: ", isSuccess);
  console.log("data: ", data);
  // console.log("error: ", error);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let post: Post = {
      title,
      body,
      userId: Number(Math.random() * 1000),
      id: Number(Math.random() * 1000),
    };
    console.log("NewPost: ", post);

    newPost(post);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>Json Placeholder Data: </h1>
      <br />
      <form onSubmit={submitHandler}>
        <h2>Add New Post</h2>
        <input
          type="text"
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder={"Body"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit"> Add</button>
      </form>
      <br />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        data?.map((post) => <PostsCard key={post.id} post={post} />).reverse()
      )}
    </div>
  );
}

export default App;
