export interface post {
  userId: string;
  id: string;
  title: string;
  body: string;
  users: user[];
}

export interface user {
  id: string;
  name: string;
  username: string;
  posts: post[];
}

export interface BlogPostListProps {
  posts: post[];
  users: user[];
}
