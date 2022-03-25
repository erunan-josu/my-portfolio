import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageContextProvider } from './context/Language'
import './styles/GlobalStyles.scss'
// Pages
import Main from './pages/Main'
import Resume from './pages/Resume'
// Components
import Header from './components/Header'

function App() {
  const activePath = useLocation().pathname
  const activeHash = useLocation().hash
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(width <= 580)
  const [seeMenu, setSeeMenu] = useState(false)
  function windowWidthChangeHandler() {
    setWidth(window.innerWidth)
  }
  function seeMenuHandler() {
    setSeeMenu(!seeMenu)
  }
  useEffect(() => {
    window.addEventListener('resize', windowWidthChangeHandler)
    setIsMobile(width > 767 ? false : true)
    return () => {
      window.removeEventListener('resize', windowWidthChangeHandler)
    }
  }, [width, activeHash, activePath])
  return (
    <div className="App">
      <LanguageContextProvider>
        <Header
          activePath={activePath}
          isMobile={isMobile}
          seeMenu={seeMenu}
          seeMenuHandler={seeMenuHandler}
        />
        <Routes>
          <Route path="/" element={<Main isMobile={isMobile} />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </LanguageContextProvider>
    </div>
  )
}

export default App
