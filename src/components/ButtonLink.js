import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ButtonLink.scss'
import { motion } from 'framer-motion'
import { titleAnimLeft } from '../Animation'

const AnimatedLink = ({ url, text, tag }) => {
  return tag === 'link' ? (
    <motion.div variants={titleAnimLeft}>
      <Link className="animated-btn" to={url}>
        {text}
      </Link>
    </motion.div>
  ) : (
    <a href={url} target="blank" className="animated-btn href">
      {text}
    </a>
  )
}

export default AnimatedLink
