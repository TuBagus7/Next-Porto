import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/app/lib/api";
import PostList from "./components/PostList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to My Portofolio</h1>
        <p className="subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          officiis. Hic rerum aperiam odit atque iure suscipit, illo, sed ipsum
          ab quaerat nemo impedit rem, sint doloremque in laborum dicta.
        </p>
      </div>
      <PostList posts={posts} />
    </>
  );
}
