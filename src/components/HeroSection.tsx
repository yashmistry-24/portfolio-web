"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0b0c0f] text-gray-200 px-6 md:px-20 overflow-hidden"
      id="hero"
    >
      {/* Background blurred blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-cyan-600 opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>

      {/* Avatar */}
      <motion.div
        className="w-48 md:w-64 rounded-full overflow-hidden shadow-lg border-4 border-white z-10"
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/yash_formal.png"
          alt="Yash Mahendra Mistry"
          width={256}
          height={256}
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
          blurDataURL="/images/yash_formal.png"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="mt-12 md:mt-0 md:ml-16 max-w-xl text-center md:text-left z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-cyan-400 drop-shadow-md"
          variants={item}
        >
          Hi, I&apos;m Yash
        </motion.h1>

        <motion.p className="text-xl text-gray-300 mb-8" variants={item}>
          I&apos;m an AI developer with a Bachelor&apos;s in Computer Science. I like to build intelligent systems & develop
          machine learning models.
        </motion.p>

        <motion.div variants={item} className="flex justify-center md:justify-start space-x-6">
        <Link
        href="#projects"
        className="inline-flex items-center border border-cyan-600 text-cyan-400 font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:scale-105"
        >
        View Projects
        <span className="ml-2">
            <FiArrowRight size={20} />
        </span>
        </Link>
        <Link
            href="#contact"
            className="inline-flex items-center border border-cyan-600 text-cyan-400 font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:scale-105"
        >
            Contact Me
        </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
