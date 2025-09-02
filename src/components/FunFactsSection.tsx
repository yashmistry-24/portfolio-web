"use client"

import { motion } from "framer-motion"

const funFacts = [
  "I once trained a machine learning model that finished faster than I expected, proof that sometimes even AI can surprise its creator!",
  "When I’m not coding or building AI systems, you’ll find me playing games with my friends, cooking, or just chilling.",
  "I believe every algorithm has a story and I’m always looking for ways to make my AI tell better ones.",
  "Can you imagine the power of AI, even this webpage is created with the help of AI."
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function FunFactsSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#0b0c0f] text-gray-200" id="fun-facts">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 drop-shadow-md">
        Fun Facts
      </h2>

      <motion.div className="max-w-3xl mx-auto space-y-8" variants={container} initial="hidden" animate="visible">
        {funFacts.map((fact, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px #00bcd4" }}
            className="bg-[#121314] rounded-xl border border-cyan-700 shadow-md p-6 text-center text-lg font-semibold transition-shadow duration-300 cursor-default"
          >
            {fact}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
