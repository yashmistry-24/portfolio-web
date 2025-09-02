"use client"

import { motion } from "framer-motion"

type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
  link: string
}

const certificates: Certificate[] = [
  {
    title: "Professional Certification Course in Data Science",
    issuer: "IBM | Coursera",
    date: "October 10, 2024",
    image: "/images/ds_ibm.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/HI3QZWOYENWO",
  },
  {
    title: "Professional Certificate Course in Data Analytics",
    issuer: "Google | Coursera",
    date: "January 14, 2023",
    image: "/images/da_google.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/CZT77CNF6UJR",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS | Coursera",
    date: "July 3, 2025",
    image: "/images/generativeai_dl.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/MB3Z90PEE9UF",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function CertificatesSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#0b0c0f] text-gray-200" id="certificates">
      <h2 className="text-4xl font-extrabold mb-16 text-center text-cyan-400 drop-shadow-md">
        Certificates
      </h2>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificates.map(({ title, issuer, date, image, link }) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00bcd4", zIndex: 10 }}
            className="bg-[#121314] rounded-xl border border-cyan-700 shadow-md overflow-hidden flex flex-col transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{title}</h3>
              <p className="text-gray-400 mb-1">{issuer}</p>
              <p className="text-gray-500 text-sm">{date}</p>
              <p className="mt-4 text-cyan-500 font-semibold underline">View Certificate</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
