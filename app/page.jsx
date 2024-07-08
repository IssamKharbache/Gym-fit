import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Hero from "./components/hero/Hero";
import InfoBanner from "./components/infobanner/InfoBanner";
import MemberShip from "./components/memberships/MemberShip";

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
      <div className="h-screen lg:h-[45vh] mt-24">
        <InfoBanner />
      </div>
      <div className="h-screen mb-12">
        <MemberShip />
      </div>
    </main>
  );
}
