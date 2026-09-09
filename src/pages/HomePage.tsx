import { useState, useEffect } from 'react';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { FallingLeavesScene } from "@/components/FallingLeavesScene";
import { LoadingScreen } from "@/components/LoadingScreen";

export const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "Siddharth Kumar Rai | Full Stack Developer & AI Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-[#f7ede0] font-sans text-[#3e1a0a]">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <FallingLeavesScene />
      <Navigation isReady={loaded} />
      
      <main>
        <Hero isReady={loaded} />
        <Projects />
        <About />
        <Services />
        <Reviews />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
