import Navbar from "@/components/Homepage/Navbar";
import { open_sans } from "./fonts";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* <h3 className={open_sans.className}>Home Page</h3> */}
      <Navbar />
    </main>
  );
}
