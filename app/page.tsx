import Image from "next/image";
import Link  from "next/link";



export default function Home() {
  return (
    <>
    <div className= "main-heading">
    <h1>Welcome to My Portofolio</h1>
    <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, officiis. Hic rerum aperiam odit atque iure suscipit, illo, sed ipsum ab quaerat nemo impedit rem, sint doloremque in laborum dicta.</p>
    <br />
    <Link href="/about">Go to About Page</Link>
    <br />
    </div>
    </>
  );
}
