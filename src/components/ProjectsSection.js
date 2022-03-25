import React, { useContext } from 'react'
import LanguageContext from '../context/Language'
// Styles
import '../styles/projects.scss'
// Components
import ProjectCard from './ProjectCard'
// Images
import motolux from '../images/motolux.png'
import elite from '../images/elite.png'
import weather from '../images/weather.png'
import music from '../images/music.png'
// Animations
import useScroll from './useScroll'
import { motion } from 'framer-motion'
import { fade } from '../Animation'

const ProjectsSection = () => {
  const { selectedLang } = useContext(LanguageContext)
  const { work } = selectedLang
  const [element, controls] = useScroll()
  return (
    <motion.section
      variants={fade}
      initial="hidden"
      animate={controls}
      ref={element}
      id="projects-section"
    >
      <div className="content-wrapper">
        <div className="title-container">
          <h1>
            {work.text1}
            <span>{work.text2}</span>
          </h1>
        </div>
        <div className="projects-container">
          <ProjectCard
            img={motolux}
            github="https://github.com/erunan-josu/motolux"
            web="https://motolux.netlify.app/"
          />
          <ProjectCard
            img={weather}
            github="https://github.com/erunan-josu/weather-app"
            web="https://weather7-app.netlify.app/"
          />
          <ProjectCard
            img={elite}
            github="https://github.com/erunan-josu/elite_gym"
            web="https://elite-gym.netlify.app/"
          />
          <ProjectCard
            img={music}
            github="https://github.com/erunan-josu/music-player"
            web="https://chillvibs.netlify.app/"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
