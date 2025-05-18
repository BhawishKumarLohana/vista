"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const stages = [
    {
      label: "TRACKING",
      gradient: "from-green-400 to-emerald-600",
      start: 0.0,
    },
    {
      label: "ANALYSIS",
      gradient: "from-blue-400 to-indigo-600",
      start: 0.33,
    },
    {
      label: "SOCIALIZING",
      gradient: "from-yellow-300 to-orange-500",
      start: 0.66,
    },
  ];

  return (
    <div
      ref={containerRef}
className=" w-full flex flex-col md:flex-row h-[500vh] bg-gradient-to-b from-black  via-indigo-600 to-gray-900"
    >
      {/* Left Side */}
      <div className="w-full md:w-full flex flex-col justify-center px-8 md:px-16 py-12 sticky top-0 h-screen">
        <div className="text-gray-400 uppercase font-mono mb-2 text-sm md:text-base">
          A TOOL FOR
        </div>

        <div className="relative h-[4rem] md:h-[6rem] overflow-hidden">
        <motion.h1
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.02], [1, 0]),
            x: useTransform(scrollYProgress, [0, 0.02], [0, -50]),
          }}
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl md:text-7xl font-bold uppercase font-mono"
        >
          CRYPTO
        </motion.h1>
          {stages.map(({ label, gradient, start }, idx) => {
            const end = start + 0.33;
            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.15, end],
              [0, 1, 0]
            );
            const x = useTransform(
              scrollYProgress,
              [start, start + 0.15, end],
              [50, 0, -50]
            );
            return (
              
              <motion.h1
                key={idx}
                style={{ opacity, x }}
                className={`absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r ${gradient} text-4xl md:text-7xl font-bold uppercase font-mono`}
              >
                {label}
              </motion.h1>
            );
          })}
        </div>

        <p className="text-gray-400 mt-4 max-w-md">
          Real-time insights into crypto markets, all in one unified dashboard.
        </p>
      </div>

     {/*  Chart */}
<div className="w-full hidden md:block justify-center items-center p-4 md:p-8 sticky top-30 h-screen ">
  <motion.div
    className="w-full flex justify-center items-center py-2 px-2 pt-20 rounded-2xl backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    <svg
      viewBox="0 0 650 400"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="50"
        y1="30"
        x2="50"
        y2="370"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="200"
        x2="580"
        y2="200"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.3"
      />

      <defs>
        <linearGradient id="crypto-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="100%" stopColor="#0088ff" />
        </linearGradient>
      </defs>

      {/* Curve 1 */}
      <motion.path
        d="M50,250 L100,220 L150,280 L200,200 L250,230 L300,170 L350,210 L400,160 L450,190 L500,140 L550,180"
        fill="transparent"
        stroke="url(#crypto-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 5.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 5,
        }}
        style={{
          filter:
            "drop-shadow(0 0 4px #FF4E50) drop-shadow(0 0 6px #FFD700)",
          transform: "translateY(10px)",
        }}
      />

      {/* Curve 2 */}
      <motion.path
        d="M50,300 L100,100 L150,270 L200,210 L250,220 L300,180 L350,200 L400,170 L450,200 L500,150 L550,190"
        fill="transparent"
        stroke="#00FF99"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        style={{
          filter: "drop-shadow(0 0 3px #00FF99)",
          transform: "translateY(10px)",
        }}
      />

      {/* Curve 3 */}
      <motion.path
        d="M50,100 L100,300 L150,260 L200,190 L250,340 L300,160 L350,220 L400,180 L450,170 L500,130 L550,20"
        fill="transparent"
        stroke="#00BFFF"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          delay: 5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 2,
        }}
        style={{
          filter: "drop-shadow(0 0 3px #00BFFF)",
          transform: "translateY(10px)",
        }}
      />
    </svg>
  </motion.div>
</div>

    </div>
  );
}
