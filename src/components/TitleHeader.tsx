import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface titleHeaderProps {
  title: string;
  sub?: string;
}
const TitleHeader = ({ title, sub }: titleHeaderProps) => {
  useGSAP(() => {
    // Animate subtitle from top
    if (sub) {
      gsap.fromTo('.title-sub', {
        y: -50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.title-sub',
          start: 'top 80%'
        }
      });
    }

    // Animate title words
    gsap.fromTo('.title-word', {
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
        trigger: '.title-word',
        start: 'top 80%'
      }
    });
  });

  return (
    <div className="flex flex-col items-center  pb-20  gap-5">
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
