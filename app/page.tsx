import Image from "next/image";
import Link  from "next/link";



export default function Home() {
  return (
    <>
    <h1>Welcome to My Next.js App</h1>
    <Link href="/about">Go to About Page</Link>
    <br />
    </>
  );
}
