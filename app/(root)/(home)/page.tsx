// import Link from "next/link";
// import ExampleClient from "../../../components/ExampleClient";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  console.log("Hello, Can u see me ?");

  return (
    <div>
      {/* <ExampleClient />

      <Link href="/projects">See Projects</Link>

      <h1 className="h1-bold flex flex-col justify-center items-center">
        Home
      </h1>

      <Link href="/projects/lists">See Projects List</Link> */}
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
}
