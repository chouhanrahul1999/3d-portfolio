import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import ProjectLinks from "../components/ProjectLinks";
import "../styles/holographic-cards.css";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    const projects = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
    ];
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      },
    );

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
          title="My Frontend Projects"
          sub="🛠️ My Works & projects Overview"
        />

        <div className="showcaselayout pb-36">
          <div ref={rydeRef} className="first-project-wrapper cursor-pointer">
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img src="/images/project1.png" alt="Zentry Game Landing Page" />
              </div>
            </div>
            <div className="text-content">
              <h2>
                Zentry Game Landing Page - Interactive Gaming Experience
              </h2>
              <ProjectLinks liveUrl="#" githubUrl="#" />
              <p className="text-white-50 md:text-xl">
                A modern gaming landing page built with TypeScript, React, TailwindCSS & GSAP for smooth animations. This immersive gaming experience features interactive elements, responsive design optimized for all devices, and advanced scroll-triggered animations. The project showcases cutting-edge web technologies with seamless user interactions and dynamic visual effects that bring the gaming world to life.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project cursor-pointer" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project2.png"
                    alt="MacBook 3D Landing Page"
                  />
                </div>
              </div>
              <h2>MacBook 3D Landing Page - Interactive Product Showcase</h2>
              <ProjectLinks liveUrl="#" githubUrl="#" />
              <p className="text-white-50 text-sm mt-2">Built with GSAP, TailwindCSS & Three.js for immersive 3D experience.</p>
            </div>

            <div className="project cursor-pointer" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] holographic-card">
                <div className="holographic-content">
                  <img src="/images/project3.png" alt="Velvet Pour Drinks Website" />
                </div>
              </div>
              <h2>Velvet Pour - Premium Drinks Experience</h2>
              <ProjectLinks disabled />
              <p className="text-white-50 text-sm mt-2">Elegant beverage website serving variety of drinks, built with TailwindCSS & GSAP animations.</p>
            </div>
          </div>
        </div>

        <TitleHeader title="My Full-Stack Project" />

        <div className="showcaselayout  ">
          <div ref={rydeRef} className="first-project-wrapper cursor-pointer">
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Zentry
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </div>
              </div>
              <h2>3d Landing page of Mackbook Model.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] holographic-card">
                <div className="holographic-content">
                  <img src="/images/project3.png" alt="YC Directory App" />
                </div>
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>

        <div className="showcaselayout"></div>
      </div>
    </div>
  );
};

export default ShowcaseSection;