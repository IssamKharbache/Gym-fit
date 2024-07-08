import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Hero from "./components/hero/Hero";
import InfoBanner from "./components/infobanner/InfoBanner";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto mt-24 ">
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="">
        <Classes />
      </div>
      <InfoBanner />
    </main>
  );
}
