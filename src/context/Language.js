import React, { useState } from 'react'
import { createContext } from 'react'
import { Data } from '../Data'
const LanguageContext = createContext()
const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState('spanish')
  const [selectedLang, setSelectedLang] = useState(Data[0])
  const setLangHandler = async (language) => {
    setLang(language)

    setSelectedLang(Data.filter((elem) => elem.language === language)[0])
  }
  const data = { lang, setLangHandler, selectedLang }
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export { LanguageContextProvider }
export default LanguageContext
