"use client";

import { motion } from "framer-motion";
import { Globe, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#030303] py-10 text-white text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white/50"
      >
        &copy; {new Date().getFullYear()} Base MCP. All rights reserved.
      </motion.p>

      <div className="mt-6">
        <p className="text-white/70 text-lg">
          Developed by <span className="font-semibold text-indigo-400">Faruq</span>
        </p>

        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://faruqportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition duration-300"
          >
            <Globe className="w-5 h-5" /> Portfolio
          </a>

          <a
            href="www.linkedin.com/in/shittu-faruq-a37838273"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition duration-300"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-white/50 italic"
        >
          🚀 Open to new opportunities!
        </motion.p>
      </div>
    </footer>
  );
}
