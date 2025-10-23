"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/libs/utils";
import Link from "next/link";
// 1. Import BOTH the data array AND the type
import { navItems, NavItem } from "@/data"; 

// 2. The 'navItems' prop is no longer needed here
interface FloatingNavProps {
  className?: string;
}

// 3. We remove 'navItems' from the component's props
export const FloatingNav: React.FC<FloatingNavProps> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/20 rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 px-4 py-2 items-center justify-between space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {/* === Desktop Menu === */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* 4. The component now maps over the IMPORTED 'navItems' */}
            {navItems.map((navItem: NavItem, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "border text-sm font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white px-4 py-2 rounded-full"
                )}
              >
                <span>{navItem.name}</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-linear-to-r from-transparent via-blue-500 to-transparent h-px" />
              </Link>
            ))}
          </div>

          {/* === Hamburger Button === */}
          <button
            className="flex sm:hidden p-2 rounded-full border border-neutral-200 dark:border-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              className="h-5 w-5 text-black dark:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>

      {/* === Mobile Menu (Dropdown) === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-4900 pt-24 pb-8"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((navItem: NavItem, idx: number) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className="block w-full text-center py-3 text-lg font-medium text-white dark:text-neutral-50"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};