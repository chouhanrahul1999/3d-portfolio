import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import ProjectLinks from "../components/ProjectLinks";
import "../styles/holographic-cards.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const navigate = useNavigate();

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
          <div
            ref={rydeRef}
            onClick={() => {
              window.open("https://zentry-game.vercel.app", "_blank");
            }}
            className="first-project-wrapper cursor-pointer"
          >
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img
                  src="/images/project1.png"
                  alt="Zentry Game Landing Page"
                />
              </div>
            </div>
            <div className="text-content">
              <h2 className="mb-4">
                Zentry Game Landing Page - Interactive Gaming Experience{" "}
                <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/zentry-app" className="" />
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern gaming landing page built with TypeScript, React,
                TailwindCSS & GSAP for smooth animations. This immersive gaming
                experience features interactive elements, responsive design
                optimized for all devices, and advanced scroll-triggered
                animations. The project showcases cutting-edge web technologies
                with seamless user interactions and dynamic visual effects that
                bring the gaming world to life.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project cursor-pointer" onClick={() => {
              window.open("https://apple-macbook-website1996.vercel.app/")
            }} ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project2.png"
                    alt="MacBook 3D Landing Page"
                  />
                </div>
              </div>
              <h2 className="mb-4">
                MacBook Pro 3D Landing Page <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/Apple-Macbook_website" />
              </h2>
              <p className="text-white-50 text-sm mt-2">
                Built with GSAP, TailwindCSS & Three.js for immersive 3D
                experience.
              </p>
            </div>

            <div className="project cursor-pointer" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project3.png"
                    alt="Velvet Pour Drinks Website"
                  />
                </div>
              </div>
              <h2 className="mb-4">
                Velvet Pour - Premium Drinks Experience{" "}
                <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/gsap-cocktails" />
              </h2>
              <p className="text-white-50 text-sm mt-2">
                Elegant beverage website serving variety of drinks, built with
                GSAP animations.
              </p>
            </div>
          </div>
        </div>

        <TitleHeader title="My Full-Stack Project" />

        <div className="showcaselayout pb-24">
          <div
            ref={rydeRef}
            className="first-project-wrapper cursor-pointer"
            onClick={() => navigate("/project/betteruptime")}
          >
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img src="/images/project4.png" alt="Ryde App Interface" />
              </div>
            </div>
            <div className="text-content">
              <h2 className="mb-4">
                BetterUptime - Web Monitoring App<ProjectLinks githubUrl="https://github.com/chouhanrahul1999/betteruptime-app" />
              </h2>
              <p className="text-white-50 md:text-xl">
                Full-stack microservices architecture with dual event streaming using Redis Streams and Kafka for multi-region website monitoring with real-time notifications. Monitors websites across India and USA at 3-minute intervals, detecting downtime and instantly alerting users via Email, Slack, Discord, Webhook, and Telegram — delivering notifications in under 5 seconds with 99.9% system availability.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project"
              ref={libraryRef}
              onClick={() => {
                window.open(" https://crtd.in/", "_blank");
              }}
            >
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/project6.png"
                    alt="Library Management Platform"
                  />
                </div>
              </div>
              <h2>CRTD Technology Web Application.</h2>

              <p className="text-white-50 text-sm mt-2">
                A comprehensive web application for CRTD Technology built with the MERN stack, featuring automated deployment through CI/CD pipeline.
              </p>
            </div>

            <div
              className="project"
              ref={ycDirectoryRef}
              onClick={() => {
                navigate("/project/excelidraw");
              }}
            >
              <div className="image-wrapper bg-[#FFE7EB] holographic-card">
                <div className="holographic-content">
                  <img src="/images/project5.png" alt="YC Directory App" />
                </div>
              </div>
              <h2>Excelidraw - Real-Time Collaborative Whiteboard <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/Exceliodraw" /></h2>

              <p className="text-white-50 text-sm mt-2">
                A real-time collaborative whiteboard application with dual-backend architecture, WebSocket synchronization & comprehensive drawing tools.
              </p>
            </div>
          </div>
        </div>

        <TitleHeader title="My React-Native Projects" />

        <div className="showcaselayout  ">
          <div
            ref={rydeRef}
            className="first-project-wrapper cursor-pointer"
            onClick={() => navigate("/project/fast-food-app")}
          >
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img src="/images/food.png" alt="Fast Food App" />
              </div>
            </div>
            <div className="text-content">
              <h2 className="mb-4">
                Fast Food App - Mobile Food Ordering{" "}
                <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/fast-food-app" />
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack mobile food ordering app built with React Native and Expo. Browse food categories, search menu items, manage your cart, and place orders — powered by Appwrite backend with Zustand state management.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project"
              ref={libraryRef}
              onClick={() => {
                navigate("/project/betteruptime");
              }}
            >
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/react2.png"
                    alt="Library Management Platform"
                  />
                </div>
              </div>
              <h2>3d Landing page of Mackbook Model.</h2>
            </div>

            <div
              className="project"
              ref={ycDirectoryRef}
              onClick={() => {
                navigate("/project/excelidraw");
              }}
            >
              <div className="image-wrapper bg-[#FFE7EB] holographic-card">
                <div className="holographic-content">
                  <img src="/images/react3.png" alt="YC Directory App" />
                </div>
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>

        <div className="w-full pt-24  flex justify-center">
          <div className="min-w-2xs md:min-w-sm">
            <Button className=" " text="View all Projects" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
