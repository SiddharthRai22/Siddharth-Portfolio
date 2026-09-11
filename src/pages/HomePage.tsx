import React, { useState, useEffect } from 'react';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { FallingLeavesScene } from "@/components/FallingLeavesScene";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SectionProvider } from "@/components/SectionContext";

interface SectionDefinition {
  id: string;
  render: (props: { isReady: boolean }) => React.ReactNode;
}

// Dynamic ordered section registry:
// The alternating color theme is automatically calculated by SectionProvider
// based on the section's position (index) in this list:
// Section 1 (index 0): Hero     -> Light/cream
// Section 2 (index 1): About    -> Orange/warm
// Section 3 (index 2): Projects -> Light/cream
// Section 4 (index 3): Skills   -> Orange/warm
// Section 5 (index 4): Contact  -> Light/cream
const SECTIONS: SectionDefinition[] = [
  { id: 'hero', render: ({ isReady }) => <Hero isReady={isReady} /> },
  { id: 'about', render: () => <About /> },
  { id: 'projects', render: () => <Projects /> },
  { id: 'skills', render: () => <Skills /> },
  { id: 'contact', render: () => <Contact /> },
];

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
        {SECTIONS.map((section, index) => (
          <SectionProvider key={section.id} index={index}>
            {section.render({ isReady: loaded })}
          </SectionProvider>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
