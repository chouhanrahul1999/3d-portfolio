import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface titleHeaderProps {
  title: string;
  sub?: string;
}
const TitleHeader = ({ title, sub }: titleHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    if (sub) {
      gsap.fromTo(container.querySelector('.title-sub'), {
        y: -50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.querySelector('.title-sub'),
          start: 'top 80%'
        }
      });
    }

    gsap.fromTo(container.querySelectorAll('.title-word'), {
      y: 30,
      opacity: 0,
      rotateX: 90
    }, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container.querySelector('.title-word'),
        start: 'top 80%'
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col items-center pb-20 gap-5">
      {sub && (
        <div className="hero-badge title-sub">
          <p>{sub}</p>
        </div>
      )}

      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title.split(' ').map((word, index) => (
          <span key={index} className="title-word inline-block mr-3">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TitleHeader;
