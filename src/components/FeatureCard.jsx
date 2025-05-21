"use client";
import { motion } from "framer-motion";

export default function FeatureCard({ name, description, className = "", feature }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8 backdrop-blur-md"
      >
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 font-mono mb-2">
            {name}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        <button
          className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300"
          onClick={() => {
            window.location.href = `/${feature}`;
          }}
        >
          View Feature
        </button>

        <motion.div
          className="w-24 h-24 bg-gradient-to-tr from-purple-600 via-green-300 to-transparent rounded-full blur-sm opacity-60 hidden md:block"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
