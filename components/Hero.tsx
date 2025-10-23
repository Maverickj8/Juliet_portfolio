import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/libs/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-o left-0 flex h-200 w-full items-center justify-center  dark:bg-[#000319]">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[50px_50px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">Flexible and Responsive Web</h2>
          <TextGenerateEffect className="text-center text-[40px] md:text-9xl lg:text-6xl " words="Transforming Ideas into High-Performance Web Applications."/>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Juliet a Web Developer
          </p>
          <Link href={'#projects'}>
          <MagicButton
          title="Show my work"
          icon={<FaLocationArrow/>}
          position="right"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
