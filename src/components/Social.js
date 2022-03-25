import React from 'react'

// Styles
import '../styles/Social.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <div className="social-bar">
      <a href="https://twitter.com/dev_josu" target="blank">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/josu-hern%C3%A1ndez-preciado-76966a205/"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="https://github.com/erunan-josu" target="blank">
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
      <div className="long-bar"></div>
    </div>
  )
}

export default Social
