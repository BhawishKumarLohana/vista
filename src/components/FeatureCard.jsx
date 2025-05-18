"use client"
import { motion } from "framer-motion";

export default function FeatureCard({ name, description, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl shadow-2xl p-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-12 backdrop-blur-md ${className}`}
    >
      {/* Left: Text + Button */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 font-mono mb-4">
          {name}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
          {description}
        </p>
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
          View Feature
        </button>
      </div>

      {/* Right: Animated Orb */}
      <motion.div
        className="w-40 h-40 bg-gradient-to-tr from-purple-600 via-green-300 to-transparent rounded-full blur-sm opacity-60"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

