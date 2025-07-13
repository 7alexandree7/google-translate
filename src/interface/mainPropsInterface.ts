export interface mainProps  {
    sourceLang: string,
    setSourceLang: React.Dispatch<React.SetStateAction<string>>,
    targetLang: string,
    setTargetLang: React.Dispatch<React.SetStateAction<string>>,
    sourceText: string,
    setSourceText: React.Dispatch<React.SetStateAction<string>>,
    translatedText: string,
    isLoading: boolean,
    swaperTranslate: () => void
}