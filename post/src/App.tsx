import { useState, useEffect } from "react";
import "./App.css";
import BlogPostList from "./components/BlogPostList/BlogPostList";

const postFetch = async (setPosts: any) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json().then((data) => data.slice(0, 11));
  setPosts(data);
};

const userFetch = async (setUsers: any) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
  const data = await response.json()
  setUsers(data);
};

function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    postFetch(setPosts);
    userFetch(setUsers);
  }, []);

  return (
    <>
      {posts.length > 3 && <BlogPostList posts = {posts} users={users}/>}
    </>
  );
}

export default App;
