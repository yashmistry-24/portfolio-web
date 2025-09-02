"use client"

import { JSX, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiPython,
  SiMysql,
  SiC,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiDocker,
  SiFlask,
  SiStreamlit,
  SiJupyter,
  SiGooglecolab,
  SiGoogleanalytics,
} from "react-icons/si"
import { BiBrain } from "react-icons/bi"
import { FaFileExcel, FaCloud } from "react-icons/fa"
import { HiChartPie } from "react-icons/hi"

type Skill = {
  name: string
  icon: JSX.Element
}

type SkillsMap = {
  [category: string]: Skill[]
}

const allSkills: SkillsMap = {
  "Programming Languages": [
    { name: "Python", icon: <SiPython size={20} /> },
    { name: "MySQL", icon: <SiMysql size={20} /> },
    { name: "C", icon: <SiC size={20} /> },
    { name: "C++", icon: <SiCplusplus size={20} /> },
  ],
  "Libraries & Frameworks": [
    { name: "Pandas", icon: <SiPandas size={20} /> },
    { name: "NumPy", icon: <SiNumpy size={20} /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn size={20} /> },
    { name: "PyTorch", icon: <SiPytorch size={20} /> },
    { name: "TensorFlow", icon: <SiTensorflow size={20} /> },
    { name: "Keras", icon: <SiKeras size={20} /> },
    { name: "OpenCV", icon: <SiOpencv size={20} /> },
    { name: "NLP", icon: <BiBrain size={20} /> },
  ],
  "Tools & Platforms": [
    { name: "Azure AI", icon: <FaCloud size={20} /> },
    { name: "Docker", icon: <SiDocker size={20} /> },
    { name: "Flask", icon: <SiFlask size={20} /> },
    { name: "Streamlit", icon: <SiStreamlit size={20} /> },
    { name: "Jupyter Notebook", icon: <SiJupyter size={20} /> },
    { name: "Google Colab", icon: <SiGooglecolab size={20} /> },
  ],
  "Data Analysis & Visualization": [
    { name: "Excel", icon: <FaFileExcel size={20} /> },
    { name: "Power BI", icon: <HiChartPie size={20} /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics size={20} /> },
  ],
}

const categories = [...Object.keys(allSkills)]

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Programming Languages")

  const filteredSkills =
    selectedCategory === "All"
      ? Object.values(allSkills).flat()
      : allSkills[selectedCategory] ?? []

  return (
    <section id="skills" className="py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Skills & Technologies</h2>

      {/* Tabs */}
      <nav className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`min-w-[110px] px-4 py-2 rounded-md font-semibold border transition duration-300 ${
              selectedCategory === category
                ? "bg-cyan-600 border-cyan-600 text-white"
                : "border-gray-600 text-gray-300 hover:bg-cyan-500 hover:text-white"
            }`}
            title={category}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Skill Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredSkills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center space-x-4 border border-gray-700 rounded-md px-4 py-4 cursor-default hover:bg-cyan-700 transition-colors"
          >
            <span className="text-cyan-400">{icon}</span>
            <span className="text-gray-200 font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
