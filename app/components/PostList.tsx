import Link from "next/link";

const PostList = (props) => {
  const posts = props.posts;
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
