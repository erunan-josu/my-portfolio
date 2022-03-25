import React, { useContext } from 'react'
import LanguageContext from '../context/Language'
// Styles
import '../styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// Animation
import useScroll from './useScroll'
import { motion } from 'framer-motion'
import { fade } from '../Animation'

const ContactSection = () => {
  const { selectedLang } = useContext(LanguageContext)
  const { contact } = selectedLang
  const [element, controls] = useScroll()
  return (
    <motion.section
      variants={fade}
      initial="hidden"
      animate={controls}
      ref={element}
      id="contact-section"
    >
      <div className="content-wrapper">
        <div className="title-container">
          <h1>
            {contact.text1}
            <span>{contact.text2}</span>
          </h1>
        </div>

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
      </div>
    </motion.section>
  )
}

export default ContactSection
