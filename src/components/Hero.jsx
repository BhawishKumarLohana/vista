"use client";
import { motion } from "framer-motion";

export default function Hero({ blur }) {
  return (
    <motion.div
  className="w-full flex justify-center items-center pt-20"
  style={{ filter: blur }}
>
  <svg
    viewBox="0 0 1000 400"  
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Axes */}
    <line x1="50" y1="30" x2="50" y2="370" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
    <line x1="50" y1="200" x2="580" y2="200" stroke="#ffffff" strokeWidth="2" opacity="0.3" />

    {/* Gradient */}
    <defs>
      <linearGradient id="crypto-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>

    {/* Curve */}
    <motion.path
      d="M50,300 Q100,150 150,250 T250,180 T350,220 T450,160 T550,200"
      fill="transparent"
      stroke="url(#crypto-gradient)"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 8px #FF0000)" }}
    />

    {/* Dot animation */}
    <circle r="5" fill="#FF0000">
      <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
        <mpath xlinkHref="#cryptoPath" />
      </animateMotion>
    </circle>
    <path
      id="cryptoPath"
      d="M50,300 Q100,150 150,250 T250,180 T350,220 T450,160 T550,200"
      fill="transparent"
    />
  </svg>
</motion.div>
  );
}
