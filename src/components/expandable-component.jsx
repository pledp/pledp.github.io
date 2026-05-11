"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Expandable component with:
 * - 50px peek view when collapsed
 * - animated Tailwind gradient fade transition
 * - configurable Tailwind color input
 * - smooth Framer Motion height animation
 */

export default function Expandable({
  title,
  children,
  className = "",
  buttonBg = "",
  gradientTo = "white", // Tailwind color (e.g. white, gray-900)
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Content wrapper */}
      <div className="relative">
        <motion.div
          animate={{
            height: isOpen ? "auto" : 70,
          }}
          initial={false}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div>{children}</div>
        </motion.div>

        {/* Tailwind gradient fade overlay */}
        <div
          className={`
            absolute bottom-0 left-0 w-full h-16
            bg-gradient-to-b from-transparent to-green-100
            transition-opacity duration-500
            ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        />
      </div>

      {/* Toggle button */}
      <motion.button
        layout
        onClick={toggle}
        className={`w-full py-3 flex justify-center items-center hover:bg-white bg-green-100 transition rounded-b-xl ${buttonBg}`}
      >
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={40}
        />
      </motion.button>
    </div>
  );
}
