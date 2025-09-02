"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 flex justify-between items-center bg-[#0b0c0f] bg-opacity-95 backdrop-blur-md border-b border-gray-800">
        {/* Location */}
        <span className="text-xs sm:text-sm font-semibold text-cyan-400">
          Mumbai, Maharashtra<span className="hidden xs:inline"> - India</span>
        </span>
        {/* Hamburger Button */}
        <button
          className="text-cyan-400 text-2xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          <FiMenu />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${menuOpen ? "block opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      {/* Side Drawer Navigation */}
      <nav
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-[#121314] border-l border-cyan-700 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <span className="text-cyan-400 font-semibold text-base">Menu</span>
          <button
            className="text-gray-400 text-2xl p-1 rounded focus:outline-none hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col space-y-2 p-6">
          {[
            { label: "Skills", id: "skills" },
            { label: "Projects", id: "projects" },
            { label: "Certificates", id: "certificates" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                className="w-full text-left text-cyan-400 font-semibold py-3 px-2 rounded hover:bg-[#1c1d21] transition"
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to prevent content underlap on mobile */}
      <div className="h-14 sm:h-14" />
    </>
  )
}
