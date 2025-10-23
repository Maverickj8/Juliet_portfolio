"use client";
import { useEffect } from "react";
// Assuming 'motion/react' is correct for your setup.
import { motion, stagger, useAnimate } from "motion/react"; 
import { cn } from "@/libs/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    // Check if the ref is available before running the animation
    if (!scope.current) return;

    animate(
      "span",
      {
        opacity: 1,
        // Using the 'filter' prop here
        filter: filter ? "blur(0px)" : "none", 
      },
      {
        // Using the 'duration' prop here
        duration: duration || 1, 
        delay: stagger(0.2),
      }
    );
  }, [
    // FIX: Include 'scope' to resolve the ESLint warning since scope.current is used.
    scope, 
    // Include 'animate', 'duration', and 'filter' to satisfy the linter
    // and ensure the effect re-runs if these props change.
    animate, 
    duration, 
    filter,   
  ]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 3 ? "text-purple-300" : "dark:text-white text-black"
              } opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};