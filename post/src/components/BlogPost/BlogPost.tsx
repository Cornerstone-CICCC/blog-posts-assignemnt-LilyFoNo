import "./BlogPost.css";

interface user {
  id: string;
  name: string;
  username: string;
  posts: post[];
}

interface post {
  userId: string;
  id: string;
  title: string;
  body: string;
  users: user[];
}

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
