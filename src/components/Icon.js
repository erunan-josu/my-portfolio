import React from 'react'
import '../styles/icon.scss'

const Icon = ({ img, text }) => {
  return (
    <div className="icon">
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  )
}

export default Icon
