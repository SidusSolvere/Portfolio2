import { useState, useEffect } from "react";
import GalaxyBackground from "./components/GalaxyBackground";
import BlurText from "./components/BlurText";
import PortfolioDock from "./components/PortfolioDock";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import TechStack from "./components/TechStack";
import HoverProjects from "./components/HoverProjects";
import GallerySection from "./components/GallerySection";
import ContactSocials from "./components/ContactSocials";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setLoaded(true);

      setTimeout(() => {
        setShowContent(true);

        document.body.style.overflow = "auto";
      }, 800);
    }, 2700);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <GalaxyBackground />

      <main className="relative z-10 min-h-screen">
        <div
          className={`fixed text-8xl
  top-1/2 left-1/2
  transform-gpu will-change-transform
  -translate-x-1/2 -translate-y-1/2
  transition-all duration-1000 ease-in-out z-40
  ${
    loaded ? "top-10 left-10 text-xl scale-125 translate-x-0 translate-y-0" : ""
  }`}
        >
          <BlurText
            text="SID LAHIRI"
            delay={100}
            animateBy="letters"
            direction="bottom"
            className="font-bold text-white"
          />
        </div>

        <div
          className={`
          flex flex-col mt-[5vh] ml-20
          transition-all duration-1000 ease-out
          ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="projects">
            <HoverProjects />
            <GallerySection/>
          </section>

          <section id="socials">
            <ContactSocials />
          </section>
        </div>
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <PortfolioDock />
        </div>
        <div className="fixed left-6 bottom-0 z-40 flex flex-col items-center">
  
  <a
    href="mailto:sid@example.com"
    className="
      text-sm
      tracking-widest
      text-cyan-300
      hover:text-white
      transition-colors
      rotate-180
      [writing-mode:vertical-rl]
    "
  >
    sidlahiri04@gmail.com.com
  </a>

  <div className="w-[1px] h-24 bg-cyan-400/40 mt-4"></div>

</div>
      </main>
    </>
  );
}

export default App;
