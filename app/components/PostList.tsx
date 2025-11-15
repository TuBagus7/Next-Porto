import Link from "next/link";
import { Post } from "@/interfaces/post";

interface PostListProps {
  posts: Post[];
}
const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h2>
            <Link href="/">{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PostList;
