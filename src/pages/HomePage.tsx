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
import { SectionProvider } from "@/components/SectionContext";

export const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "Siddharth Kumar Rai | Full Stack Developer & AI Engineer";
  }, []);

  // Ordered sections configuration:
  // Section 1 (index 0): Hero     -> Light
  // Section 2 (index 1): About    -> Orange
  // Section 3 (index 2): Projects -> Light
  // Section 4 (index 3): Services -> Orange
  // Section 5 (index 4): Reviews  -> Light
  // Section 6 (index 5): Skills   -> Orange
  // Section 7 (index 6): Contact  -> Light
  return (
    <div className="min-h-screen bg-[#f7ede0] font-sans text-[#3e1a0a]">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <FallingLeavesScene />
      <Navigation isReady={loaded} />
      
      <main>
        <SectionProvider index={0}>
          <Hero isReady={loaded} />
        </SectionProvider>

        <SectionProvider index={1}>
          <About />
        </SectionProvider>

        <SectionProvider index={2}>
          <Projects />
        </SectionProvider>

        <SectionProvider index={3}>
          <Services />
        </SectionProvider>

        <SectionProvider index={4}>
          <Reviews />
        </SectionProvider>

        <SectionProvider index={5}>
          <Skills />
        </SectionProvider>

        <SectionProvider index={6}>
          <Contact />
        </SectionProvider>
      </main>
    </div>
  );
};

export default HomePage;
