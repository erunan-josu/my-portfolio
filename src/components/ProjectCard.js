import React, { useContext } from 'react'
import LanguageContext from '../context/Language'
import '../styles/projectCard.scss'
import ButtonLink from './ButtonLink'

const ProjectCard = ({ img, github, web }) => {
  const { selectedLang } = useContext(LanguageContext)
  const { work } = selectedLang
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="links-container">
        <ButtonLink url={github} text={work.button1} tag="a" />
        <ButtonLink url={web} text={work.button2} tag="a" />
      </div>
    </div>
  )
}

export default ProjectCard
