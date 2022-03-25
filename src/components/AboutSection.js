import React, { useContext } from 'react'
import LanguageContext from '../context/Language'
// Styles
import '../styles/about.scss'
// Animations
import { motion } from 'framer-motion'
import { fade } from '../Animation'
import useScroll from './useScroll'
// Images
import htmlIcon from '../images/html.png'
import cssIcon from '../images/css.png'
import jsIcon from '../images/javascript.png'
import gitIcon from '../images/git.png'
import sassIcon from '../images/sass.png'
import styledComp from '../images/styledComponents.png'
import reactIcon from '../images/react.png'
import framerMotion from '../images/motion.png'
// Components
import Icon from './Icon'

const AboutSection = () => {
  const [element, controls] = useScroll()
  const { selectedLang } = useContext(LanguageContext)
  const { about } = selectedLang

  return (
    <motion.section
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      id="about-section"
    >
      <div className="content-wrapper">
        <div className="description-container">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
        </div>
        <div className="title-container">
          <h1>
            <span>{about.text1}</span> {about.text2}?
          </h1>
        </div>
        <div className="skills-container">
          <Icon img={htmlIcon} text="HTML" />
          <Icon img={cssIcon} text="CSS" />
          <Icon img={jsIcon} text="javascript" />
          <Icon img={reactIcon} text="react" />
          <Icon img={gitIcon} text="git" />
          <Icon img={styledComp} text="styled components" />
          <Icon img={sassIcon} text="sass" />
          <Icon img={framerMotion} text="framer motion" />
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
