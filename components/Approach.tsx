'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CanvasRevealEffect } from "./ui/CanvasReavealEffect";
import { cn } from "@/libs/utils";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <TextGenerateEffect className="text-center text-[40px] md:text-4xl lg:text-4xl " words="My Approach"/>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Discovery & Strategy"
          icon={<AceternityIcon order="Step 1" />}
          des="Together, we’ll define your website’s goals, target audience, and essential features. We’ll also plan the site structure, navigation flow, and content requirements to ensure everything aligns with your vision."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Project Development & Updates"
          icon={<AceternityIcon order="Step 2" />}
          des="After we agree on the strategy, I begin the development process — usually with some lofi music in the background. From wireframes to final code, you’ll receive regular updates as your website takes shape."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Development & Deployment"
          icon={<AceternityIcon order="Stage 3" />}
          des="This is where the real work begins! Using the approved design, I’ll bring your website to life with clean, functional code — built entirely from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  // 1. Rename state for clarity (was 'hovered')
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      // 2. Add all three event handlers
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)} // This toggles the state on tap
      // We no longer need 'group/canvas-card' since we're not using CSS group-hover
      className="border border-black/20 flex items-center justify-center
       dark:border-white/20  max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {/* 3. Use 'isActive' state here */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // 4. Replace 'group-hover' with state-based classes
          className={cn(
            "text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 min-w-40 mx-auto flex items-center justify-center",
            isActive ? "opacity-0 -translate-y-4" : "opacity-100"
          )}
        >
          {icon}
        </div>
        <h2
          // 5. Replace 'group-hover' with state-based classes
          className={cn(
            "dark:text-white text-center text-3xl opacity-0 relative z-10 text-black mt-4 font-bold transition duration-200",
            isActive
              ? "opacity-100 text-white -translate-y-2"
              : "opacity-0"
          )}
        >
          {title}
        </h2>
        <p
          // 6. Replace 'group-hover' with state-based classes
          className={cn(
            "text-sm opacity-0 relative z-10 mt-4 text-center transition duration-200",
            isActive ? "opacity-100 -translate-y-2" : "opacity-0"
          )}
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-px ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

