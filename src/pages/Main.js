import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import IntroSection from '../components/IntroSection'
import ProjectsSection from '../components/ProjectsSection'

const Main = ({ isMobile }) => {
  return (
    <>
      <IntroSection isMobile={isMobile} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default Main
