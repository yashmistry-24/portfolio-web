// src/app/page.tsx
"use client"

import MobileHeader from '../components/MobileHeader'
import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import CertificatesSection from '../components/CertificatesSection'
// import FunFactsSection from '../components/FunFactsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      
      <MobileHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      {/* <FunFactsSection /> */}
      <ContactSection />
    </>
  )
}
