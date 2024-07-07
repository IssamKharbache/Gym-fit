import Image from "next/image";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto mt-16 ">
      <Hero />
    </main>
  );
}
