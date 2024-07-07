import About from "./components/about/About";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto mt-24 ">
      <div className="xl:h-screen">
        <Hero />
      </div>
      <div className="xl:h-screen">
        <About />
      </div>
    </main>
  );
}
