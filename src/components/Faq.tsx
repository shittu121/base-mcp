"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    { question: "What is Base MCP?", answer: "Base MCP connects AI applications with blockchain APIs, enabling seamless smart contracts, DeFi, and payments." },
    { question: "Is it easy to integrate?", answer: "Absolutely! Our developer-friendly tools make blockchain integration effortless." },
    { question: "Who can use Base MCP?", answer: "Developers, businesses, and end-users looking to leverage AI-powered blockchain technology." },
    { question: "Is there a cost to use Base MCP?", answer: "We offer flexible pricing plans, including free-tier options for developers." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/[0.05] rounded-lg cursor-pointer p-5 transition-all hover:bg-white/[0.08]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-white/60 mt-3 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
