import Image from "next/image";
import { Poppins } from "next/font/google";
import NavBar from "@component/NavBar";

const font = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${font.className}`}
    >
      <NavBar></NavBar>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-xs lg:flex">
        <h1 className="font-medium text-6xl">
          Hi, my name is Anna <br /> and this is my portifolio.
        </h1>
      </div>
    </main>
  );
}
