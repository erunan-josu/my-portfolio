import React, { useContext } from 'react'
import LanguageContext from '../context/Language'
// Styles
import '../styles/intro.scss'
import My_photo from '../images/My_photo.png'
// Components
import Social from './Social'
import ButtonLink from './ButtonLink'
// Animations
import { motion } from 'framer-motion'
import {
  sectionAnimation,
  titleAnimLeft,
  titleAnimRight,
  mobileTitleAnimRight,
} from '../Animation'

const IntroSection = ({ isMobile }) => {
  const { selectedLang } = useContext(LanguageContext)
  const { intro } = selectedLang
  return (
    <section id="intro-section">
      <div className="content-wrapper">
        <Social />
        <motion.div
          variants={sectionAnimation}
          initial="hidden"
          animate="show"
          className="my-intro"
        >
          <motion.h2 variants={titleAnimLeft}>{intro.greeting}</motion.h2>
          <motion.h1 variants={titleAnimLeft}>
            {intro.text1} <span>{intro.text2}</span> {intro.text3}
          </motion.h1>
          <motion.p variants={titleAnimLeft}>{intro.description}</motion.p>
          <ButtonLink url="/resume" text={intro.button} tag="link" />
        </motion.div>

        <div className="img-container">
          <motion.img
            variants={!isMobile ? titleAnimRight : mobileTitleAnimRight}
            initial="hidden"
            animate="show"
            src={My_photo}
            alt="me"
          />
        </div>
      </div>
      <div className="blue-circle"></div>
    </section>
  )
}

export default IntroSection
