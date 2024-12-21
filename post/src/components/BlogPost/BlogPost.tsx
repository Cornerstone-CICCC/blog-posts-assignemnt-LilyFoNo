import "./BlogPost.css";
import { post } from "../types/interface";

const BlogPost = ({ userId, id, title, body, users }: post) => {
  const user = users.find((user) => userId === user.id);

  return (
    <>
      <div className="posts">
        <h3 key={id}>Title: {title}</h3>
        <h4>Body: {body}</h4>
        <h5>Author: {user?.name}</h5>
      </div>
    </>
  );
};

export default BlogPost;
