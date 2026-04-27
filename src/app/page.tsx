import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Moments from "@/components/Moments";
import Collaborations from "@/components/Collaborations";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Experience />
      <Projects />
      <Collaborations />
      <Skills />
      <Certifications />
      <Moments />
      <Contact />
      <FloatingCTA />
    </main>
  );
}
