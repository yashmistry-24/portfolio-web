"use client"

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export default function ContactSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#0b0c0f] text-gray-200" id="contact">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-cyan-400 drop-shadow-md">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto bg-[#121314] rounded-xl border border-cyan-700 p-8 shadow-md">
        <form
          action="mailto:your.email@example.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col space-y-6"
        >
          <label className="flex flex-col text-white font-semibold">
            Name
            <input
              type="text"
              name="Name"
              required
              className="mt-2 p-3 rounded border border-gray-700 bg-[#0b0c0f] text-white focus:outline-cyan-400 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </label>

          <label className="flex flex-col text-white font-semibold">
            Email
            <input
              type="email"
              name="Email"
              required
              className="mt-2 p-3 rounded border border-gray-700 bg-[#0b0c0f] text-white focus:outline-cyan-400 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </label>

          <label className="flex flex-col text-white font-semibold">
            Message
            <textarea
              name="Message"
              rows={5}
              required
              className="mt-2 p-3 rounded border border-gray-700 bg-[#0b0c0f] text-white focus:outline-cyan-400 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </label>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social icons */}
        <div className="mt-10 flex justify-center space-x-12 text-cyan-400">
          <a
            href="https://github.com/yashmistry-24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-600 transition"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashmahendramistry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-600 transition"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href="24yashmistry@gmail.com"
            aria-label="Email"
            className="hover:text-cyan-600 transition"
          >
            <FiMail size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
