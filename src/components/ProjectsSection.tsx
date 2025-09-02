"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  github: string
  demo?: string
}

const fullImageProjects = new Set([
  "EndoScanAI",
  "Job Matching and Interview Analysis System",
  "Research Paper Summarizer",
  "Twitter Sentiment Analysis Model",
])

const projects: Project[] = [
  {
    title: "EndoScanAI: Endometrial Cancer Detector",
    description: "Histopathological Image Classification for Endometrial Tissues with AI-powered pathology.",
    image: "/images/endoscan.png",
    github: "https://github.com/yashmistry-24/EndoScanAI",
  },
  {
    title: "Lumbar Spine Degenerative Classification",
    description: "AI system for lumbar spine MRI classification based on RSNA 2024 standards.",
    image: "/images/rsna.png",
    github: "https://github.com/yashmistry-24/rsna.app",
  },
  {
    title: "AI-Powered Study Planner",
    description: "Next.js app using Groq API for personalized study plans.",
    image: "/images/studyplanner.png",
    github: "https://github.com/yashmistry-24/AI-Powered-StudyPlanner",
  },
  {
    title: "Job Matching and Interview Analysis System",
    description: "Automated hiring system powered by NLP and transformer models.",
    image: "/images/jobmatching.png",
    github: "https://github.com/yashmistry-24/Job-Matching-and-Candidate-Analysis-System",
  },
  {
    title: "YTComment-IQ: YouTube Comments Analysis",
    description: "YouTube comments analytics using NLP and interactive charts.",
    image: "/images/ytcommentiq.png",
    github: "https://github.com/yashmistry-24/YTComment-IQ",
    demo: "https://ytcomment-iq.streamlit.app/",
  },
  {
    title: "Research Paper Summarizer",
    description: "App using OpenAI API to summarize research papers effectively.",
    image: "/images/rsp.png",
    github: "https://github.com/yashmistry-24/Research-Paper-Summarizer",
  },
  {
    title: "Twitter Sentiment Analysis Model",
    description: "ML model classifying tweets with logistic regression classifier.",
    image: "/images/tsa.png",
    github: "https://github.com/yashmistry-24/Twitter-Sentiment-Analysis",
  },
  {
    title: "Amchi Mumbai: Mumbai House Price Prediction",
    description: "Flask app predicting house prices using Kaggle dataset.",
    image: "/images/amchimumbai.png",
    github: "https://github.com/yashmistry-24/Amchi_Mumbai",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function ProjectsSection() {
  return (
    <section
      className="py-20 px-6 md:px-20 bg-[#0b0c0f] text-gray-200"
      id="projects"
    >
      <h2 className="text-4xl font-extrabold mb-20 text-center text-cyan-400 drop-shadow-md">
        Projects
      </h2>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map(({ title, description, image, github, demo }) => {
          const isFullImage = fullImageProjects.has(title)

          return (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px #00bcd4",
                zIndex: 10,
              }}
              className="bg-[#121314] rounded-xl border border-cyan-700 shadow-md flex flex-col overflow-hidden transition-shadow duration-300"
            >
              <div
                className={`relative w-full overflow-hidden rounded-t-xl ${
                  isFullImage ? "h-60" : "h-52"
                } shadow-inner`}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: isFullImage ? "contain" : "cover" }}
                  className="transition-transform duration-500 ease-in-out hover:scale-105"
                  priority={false}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">{title}</h3>
                <p className="text-gray-400 flex-grow mb-6 leading-relaxed">{description}</p>
                <div className="flex space-x-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-semibold shadow-md transition-colors"
                  >
                    GitHub
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg text-white font-semibold shadow-md transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
