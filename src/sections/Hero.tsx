import gsap from "gsap";
import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from '@gsap/react'
import AnimatedCounter from "../components/AnimatedCounter";
import { useEffect, useRef } from "react";
import { FaRegHandPointer } from "react-icons/fa";
import HeroExperince from "../components/HeroModels/HeroExperince";

const Hero = () => {
  const handRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    );
  });

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const handEl = handRef.current;
    if (!handEl) return;

    const btn = document.getElementById('button');
    if (!btn) return;

    const btnRect = btn.getBoundingClientRect();
    handEl.style.top = `${btnRect.top + btnRect.height / 2 + window.scrollY - 16}px`;

    const tl = gsap.timeline({ repeat: 0, delay: 2 });
    tl.fromTo(handEl,
      { x: 80, opacity: 0 },
      { x: -150, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
    .to(handEl, { y: -8, duration: 0.4, ease: 'power1.inOut' })
    .to(handEl, { y: 0, scale: 0.85, duration: 0.4, ease: 'power1.in' })
    .to(handEl, { scale: 1, duration: 0.4, ease: 'power1.out' })
    .to(handEl, { x: 80, opacity: 0, duration: 1, ease: 'power2.in', delay: 0.6 });

    return () => { tl.kill(); };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 dap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        {word.text}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Result</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Rahul, a developer based in India with a passion for code.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
              onClick={() => {}}
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout cursor-grab" style={{ touchAction: 'pan-y' }}>
            <div className="md:block hidden w-full h-full">
              <HeroExperince />
            </div>
            <div className="md:hidden w-full h-full flex items-center mt-20 justify-center">
              <img src="/images/3dmodle.svg" alt="3D Model" className="w-7/8 h-auto object-contain rounded-xl" />
            </div>
          </div>
        </figure>
      </div>

      {/* Hand hint - mobile only */}
      <div
        ref={handRef}
        className="md:hidden fixed right-4 pointer-events-none z-50"
        style={{ opacity: 0, top: '50%' }}
      >
        <FaRegHandPointer size={36} color="#ff6b00" />
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
