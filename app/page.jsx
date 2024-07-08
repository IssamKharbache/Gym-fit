import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Hero from "./components/hero/Hero";
import InfoBanner from "./components/infobanner/InfoBanner";
import MemberShip from "./components/memberships/MemberShip";
import MemberModal from "./components/modal/MemberModal";
import Modal from "./components/modal/Modal";
import useModalStore from "./store/modalStore";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto mt-24 ">
      <div className="h-screen" id="/">
        <Hero />
      </div>
      <div className="h-screen" id="about">
        <About />
      </div>
      <div id="classes">
        <Classes />
      </div>
      <div className="h-screen lg:h-[45vh] mt-24">
        <InfoBanner />
      </div>
      <div className="mb-12" id="memberships">
        <MemberShip />
      </div>
      <MemberModal />
    </main>
  );
}
