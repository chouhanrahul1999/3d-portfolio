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

        <TitleHeader title="My Full-Stack Projects" />

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

        <div className="showcaselayout pb-24 ">
          <div
            ref={rydeRef}
            className="first-project-wrapper cursor-pointer"
            onClick={() => navigate("/project/fast-food-app")}
          >
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img src="/screenshots/food-app.png" alt="Fast Food App" />
              </div>
            </div>
            <div className="text-content">
              <h2 className="mb-4">
                Fast Food App - Mobile Food Ordering{" "}
                <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/fast_food-app" />
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
              onClick={() => navigate("/project/movie-app")}
            >
              <div className="image-wrapper bg-[#FFEFDB] holographic-card">
                <div className="holographic-content">
                  <img
                    src="/images/react2.png"
                    alt="Movie App"
                  />
                </div>
              </div>
              <h2>Movie App - Discover & Explore Movies
                <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/movie_booking-app" />
              </h2>
              <p className="text-white-50 text-sm mt-2">
                Discover trending & popular movies powered by TMDB API and Appwrite real-time backend.
              </p>
            </div>

            <div
              className="project"
              ref={ycDirectoryRef}
              onClick={() => navigate("/project/restate")}
            >
              <div className="image-wrapper bg-[#FFE7EB] holographic-card">
                <div className="holographic-content">
                  <img src="/images/react3.png" alt="ReState Real Estate App" />
                </div>
              </div>
              <h2>ReState - Real Estate App <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/native_real-state-app" /></h2>
              <p className="text-white-50 text-sm mt-2">
                Browse property listings, view agent profiles, and manage your account with Google OAuth.
              </p>
            </div>
          </div>
        </div>
        <TitleHeader title="My Ai Projects" />

        <div className="showcaselayout  ">
          <div
            ref={rydeRef}
            className="first-project-wrapper cursor-pointer"
            onClick={() => navigate("/project/dentwise")}
          >
            <div className="image-wrapper holographic-card">
              <div className="holographic-content">
                <img src="/images/dentwise1.png" alt="DentWise AI Dental Platform" />
              </div>
            </div>
            <div className="text-content">
              <h2 className="mb-4">
                DentWise — AI-Powered Dental Care Platform{" "}
                <ProjectLinks githubUrl="https://github.com/chouhanrahul1999/dentwise-app" />
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack dental appointment booking platform with an integrated AI voice assistant. Book appointments with verified dentists, get real-time dental guidance through AI voice calls powered by Vapi, and manage your dental health — built with Next.js, Clerk, Neon PostgreSQL, and Resend.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-black-100 holographic-card overflow-hidden relative">
                {/* animated gradient orbs */}
                <div className="absolute w-40 h-40 rounded-full bg-[#52aeff]/20 blur-3xl top-4 left-4 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full bg-[#fd5c79]/20 blur-3xl bottom-4 right-4 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute w-24 h-24 rounded-full bg-[#6d45ce]/20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />

                {/* gradient border line */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#62e0ff] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#fd5c79] to-transparent" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full">
                  <div className="w-15 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl backdrop-blur-sm">
                    ⚡
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#62e0ff] animate-pulse" />
                    <span className="text-[#62e0ff] text-xs font-medium tracking-[0.2em] uppercase">Coming Soon</span>
                  </div>
                  <p className="text-white/30 text-xs text-center px-6 leading-relaxed">
                    Next project in progress
                  </p>
                </div>
              </div>
              <h2>Coming soon ...</h2>
            </div>

            <div
              className="project"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-black-100 holographic-card overflow-hidden relative">
                {/* animated gradient orbs */}
                <div className="absolute w-40 h-40 rounded-full bg-[#52aeff]/20 blur-3xl top-4 left-4 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full bg-[#fd5c79]/20 blur-3xl bottom-4 right-4 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute w-24 h-24 rounded-full bg-[#6d45ce]/20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />

                {/* gradient border line */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#62e0ff] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#fd5c79] to-transparent" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full">
                  <div className="w-15 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl backdrop-blur-sm">
                    ⚡
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#62e0ff] animate-pulse" />
                    <span className="text-[#62e0ff] text-xs font-medium tracking-[0.2em] uppercase">Coming Soon</span>
                  </div>
                  <p className="text-white/30 text-xs text-center px-6 leading-relaxed">
                    Next project in progress
                  </p>
                </div>
              </div>
              <h2>Coming soon ...</h2>
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
