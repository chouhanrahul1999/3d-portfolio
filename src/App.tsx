import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import Navbar from "./sections/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";
import TachStack from "./sections/TechStack";

function App() {
  return (
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
  );
}

export default App;
