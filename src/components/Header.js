import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../context/Language'
// Styles
import '../styles/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// Components
import ButtonLink from './ButtonLink'

const Header = ({ activePath, seeMenuHandler, isMobile, seeMenu }) => {
  const { lang, setLangHandler, selectedLang } = useContext(LanguageContext)
  const { header } = selectedLang

  return (
    <header className="nav">
      <div className="content-wrapper">
        <div className="nav-container">
          {activePath !== '/resume' && (
            <FontAwesomeIcon
              icon={faBars}
              className="menu-bars"
              onClick={seeMenuHandler}
            />
          )}

          <Link to="/" id="logo">
            <span>{'<'}</span>Josu<span>{' />'}</span>
          </Link>
        </div>

        {activePath !== '/resume' ? (
          <>
            <div
              className={`${isMobile && 'mobile-nav-links'} ${
                seeMenu && 'see-menu'
              }`}
            >
              <ul className="nav-container">
                <li>
                  <a
                    href="#intro-section"
                    onClick={isMobile ? () => seeMenuHandler() : ''}
                  >
                    {header.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#about-section"
                    onClick={isMobile ? () => seeMenuHandler() : ''}
                  >
                    {header.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects-section"
                    onClick={isMobile ? () => seeMenuHandler() : ''}
                  >
                    {header.projects}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-section"
                    onClick={isMobile ? () => seeMenuHandler() : ''}
                  >
                    {header.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="nav-container nav-lang">
                <li
                  className={lang === 'spanish' ? 'active' : ''}
                  onClick={() => setLangHandler('spanish')}
                >
                  es
                </li>
                <li
                  className={lang === 'english' ? 'active' : ''}
                  onClick={() => setLangHandler('english')}
                >
                  en
                </li>
                <li
                  className={lang === 'japanese' ? 'active' : ''}
                  onClick={() => setLangHandler('japanese')}
                >
                  jp
                </li>
              </ul>
            </div>
          </>
        ) : (
          <ButtonLink url="/" text={header.home} tag="link" />
        )}
      </div>
    </header>
  )
}

export default Header
