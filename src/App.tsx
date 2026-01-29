import { Routes, Route } from 'react-router-dom';
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import Navbar from "./sections/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";
import TachStack from "./sections/TechStack";
import ProjectDetail from "./components/projectDetails/ProjectDetail";
import { projects } from "./data/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <main>
          <Navbar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TachStack />
          <Contact />
          <Footer />
        </main>
      } />
      <Route path="/project/:projectId" element={<ProjectDetail projects={projects} />} />
    </Routes>
  );
}

export default App;
