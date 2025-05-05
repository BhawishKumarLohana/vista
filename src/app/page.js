"use client";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacityTrack = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 0]);
  const opacityAnalyze = useTransform(scrollYProgress, [0.5, 0.75, 1.0], [0, 1, 0]);
  const opacityPredict = useTransform(scrollYProgress, [1.0, 1.25, 1.5], [0, 1, 0]);

  return (
    <div  className="relative h-[500vh] bg-black">
      {/* Sticky Hero Chart */}
      <motion.div className="sticky top-0">
      <Hero className="sticky top-0" /> 
     </motion.div>
      {/* Glass overlay */}
      <motion.div
        className="fixed top-1/2 left-3/4 z-10 pointer-events-none flex flex-col justify-center items-center w-[300px] h-[300px] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/30 shadow-xl text-center text-4xl md:text-6xl font-bold space-y-4 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: opacityTrack
        }}
      >
        <div className="text-white text-2xl font-extrabold">TRACK</div>
      </motion.div>
      <motion.div
        className="fixed top-1/2 left-3/4 z-10 pointer-events-none flex flex-col justify-center items-center w-[300px] h-[300px] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/30 shadow-xl text-center text-4xl md:text-6xl font-bold space-y-4 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: opacityAnalyze
        }}
      >
        <div className="text-white text-2xl font-extrabold">Analyze</div>
      </motion.div>

      <motion.div
        className="fixed top-1/2 left-3/4 z-10 pointer-events-none flex flex-col justify-center items-center w-[300px] h-[300px] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/30 shadow-xl text-center text-4xl md:text-6xl font-bold space-y-4 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: opacityPredict
        }}
      >
        <div className="text-white text-2xl font-extrabold">PREDICT</div>
      </motion.div>
      
    </div>
  );
}
