import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/models/techModels/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', {y: 50, opacity: 0}, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center'
      }
    })
  })

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <div className="md:block hidden w-full h-full">
                    <TechIcon model={icon} />
                  </div>
                  <div className="md:hidden w-full h-full flex items-center justify-center">
                    <img src={icon.mobileImg} alt={icon.name} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
