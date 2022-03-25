import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import LanguageContext from '../context/Language'
// Components
import Icon from '../components/Icon'
// Animations
import { motion } from 'framer-motion'
import { fade } from '../Animation'
import useScroll from '../components/useScroll'
// Styles
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/resume.scss'
import htmlIcon from '../images/html.png'
import cssIcon from '../images/css.png'
import jsIcon from '../images/javascript.png'
import gitIcon from '../images/git.png'
import sassIcon from '../images/sass.png'
import styledComp from '../images/styledComponents.png'
import reactIcon from '../images/react.png'
import framerMotion from '../images/motion.png'

const Resume = () => {
  const activePath = useLocation().pathname
  const [element, controls] = useScroll()
  const { selectedLang } = useContext(LanguageContext)
  const { resume, intro, contact } = selectedLang
  const programming = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Git',
    'Sass',
    'Styled Components',
    'Framer motion',
  ]
  const icons = [
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    gitIcon,
    sassIcon,
    styledComp,
    framerMotion,
  ]
  return (
    <div className="resume-container">
      <div className="content-wrapper">
        <div className="main-info">
          <h1>
            <span>{intro.text2}</span> {intro.text3}
          </h1>
          <h2>{intro.description}</h2>
          <p>{resume.p1}</p>
          <p>{resume.p2}</p>
        </div>

        <div className="knowledge">
          <ul>
            {programming.map((item, i) => (
              <Icon img={icons[i]} text={item} key={i} />
            ))}
          </ul>
        </div>

        <div className="certificates">
          <h2 className="title">{resume.knowledge}</h2>
          <div className="certificate-box">
            <h3>FreeCodeCamp</h3>
            <ul>
              <li>Responsive Web Design + {'(2021)'}</li>
              <li>Javascript Algorithms and Data Structures + {'(2021)'}</li>
            </ul>
          </div>
          <div className="certificate-box">
            <h3>The Odin Project</h3>
            <ul>
              <li>Foundations + {'(2021)'}</li>
              <li>Javascript + {'(2021)'}</li>
            </ul>
          </div>
          <div className="certificate-box">
            <h3>Udemy</h3>
            <ul>
              <li>Javascript Moderno + {'(2021)'}</li>
              <li>Master en CSS: responsive, sass, flexbox... + {'(2021)'}</li>
            </ul>
          </div>
          <div className="certificate-box">
            <h3>DevelopedByEd</h3>
            <ul>
              <li>The Creative React and Redux course + {'(2022)'}</li>
            </ul>
          </div>
        </div>
        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="languages"
        >
          <h2 className="title">{resume.languages}</h2>
          <ul>
            <li>
              {resume.spanish}: {resume.native}
            </li>
            <li>
              {resume.english}: {resume.high}
            </li>
            <li>
              {resume.japanese}: {resume.high}
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="contact"
        >
          <h2 className="title">{contact.text1 + contact.text2}</h2>
          <div className="contact-ways-container">
            <div className="contact-way">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              <a
                target="blank"
                href="https://www.linkedin.com/in/josu-hern%C3%A1ndez-preciado-76966a205/"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-way">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="tel:+34-665-48-25-81">665-48-25-81</a>
            </div>

            <div className="contact-way">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:josu.hernandez92@gmail.com" target="blank">
                josu.hernandez92@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
