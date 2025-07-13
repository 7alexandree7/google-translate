import { useEffect, useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ContentTranslate from './Components/Main/ContentTranslate'

function App() {

  const [sourceLang, setSourceLang] = useState<string>('pt')
  const [targetLang, setTargetLang] = useState<string>('en-us')
  const [sourceText, setSourceText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (sourceText.trim().length <= 0) {
      setTranslatedText('')
      return
    }
    if (sourceText) {
      const delay = setTimeout(() => {
        handleTranslate()
      }, 800)
      return () => clearTimeout(delay)
    }
  }, [sourceText, sourceLang, targetLang])


  const handleTranslate = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLang}|${targetLang}`)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      const translated = data?.matches?.[0]?.translation || data.responseData.translatedText
      setTranslatedText(translated)

    } catch (error) {
      console.error('Error:', error)
    }

    finally {
      setIsLoading(false)
    }
  }

  const swaperTranslate = () => {
    setSourceText(translatedText)
    setTranslatedText(sourceText)
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
  }


  return (
    <div className='min-h-screen bg-[#F1F3F4] flex flex-col'>
      <Header />
      <ContentTranslate
       sourceLang={sourceLang}
       setSourceLang={setSourceLang}
       targetLang={targetLang}
       setTargetLang={setTargetLang}
       sourceText={sourceText}
       setSourceText={setSourceText}
       translatedText={translatedText}
       isLoading={isLoading}
       swaperTranslate={swaperTranslate}
        />
      <Footer />
    </div>
  )
}

export default App
