"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeInSection from "./scroll-effect-component";


/**
 * Expandable with:
 * - button on TOP
 * - 70px peek when collapsed
 * - gradient fade on bottom
 */

export default function ExpandableReverse({
  title,
  children,
  className = "",
  buttonBg = "",
  gradientTo = "green-100",
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen((v) => !v);
  };

  return (
    <FadeInSection className={`w-full overflow-hidden ${className}`}>
      {/* TITLE + TOGGLE BUTTON (TOP) */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {title && (
          <h1 className="text-3xl font-bold fade-delay">{title}</h1>
        )}

        <motion.button
          layout
          onClick={toggle}
          className={`
            relative inline-flex items-center justify-center
            px-2 py-2 w-52 rounded-full
            font-bold overflow-hidden
            border-2 border-white
            bg-black-100 text-white
            transition-colors duration-300 ease-in-out
            hover:bg-white hover:text-black
          `}
        >
          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={40}
          />
        </motion.button>
      </div>

      {/* CONTENT */}
      <div className="relative mt-5">
        <motion.div
          animate={{
            height: isOpen ? "auto" : 220,
          }}
          initial={false}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div>{children}</div>
        </motion.div>

        {/* GRADIENT FADE (bottom of content) */}
        <div
          className={`
            absolute bottom-0 left-0 w-full h-20
            bg-gradient-to-b from-transparent to-black-100
            transition-opacity duration-500
            ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        />
      </div>
    </FadeInSection>
  );
}
