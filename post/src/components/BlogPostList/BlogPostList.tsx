import BlogPost from "../BlogPost/BlogPost";

interface post {
  userId: string;
  id: string;
  title: string;
  body: string;
  users: user[];
}

interface user {
  id: string;
  name: string;
  username: string;
  posts: post[];
}

interface BlogPostListProps {
  posts: post[];
  users: user[];
}

const BlogPostList = ({ posts, users }: BlogPostListProps) => {
  return (
    <>
      <h1>Blog Post List</h1>
      {posts.map((post) => {
        return (
          <BlogPost
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            userId={post.userId}
            users={users}
          />
        );
      })}
    </>
  );
};

export default BlogPostList;
