import BlogPost from "../BlogPost/BlogPost";
import { BlogPostListProps } from "../types/interface";

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
