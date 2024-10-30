import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ResumeButton from "./ResumeButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="gray" />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="lightgray"
        />
      </div>

      {/**
       *  UI: grid
       */}
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-gray-900/[0.03] bg-gray-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-gray-500 max-w-80">
            seeking an End-of-study internship of 6 months.
          </p>

          {/**
           *  Text Generate Effect
           */}
          <TextGenerateEffect
            words="Driven by technology and innovation"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-black"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-gray-700">
            Hi! I&apos;m Wijdane, a software engineer based in Morocco.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
            <a href="#about" className="">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <ResumeButton
              title="Download my resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;