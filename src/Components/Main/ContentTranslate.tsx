
import SvgTranslate from '../svg/SvgTranslate/SvgTranslate'
import { languages } from '../../data/lenguages'
import type { mainProps } from '../../interface/mainPropsInterface'


const ContentTranslate = ({ sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    sourceText,
    setSourceText,
    translatedText,
    isLoading,
    swaperTranslate
}: mainProps) => {


    return (
        <main className='flex flex-grow items-start justify-center px4 py-8 '>
            <div className='w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden'>

                <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                    <select onChange={(e) => setSourceLang(e.target.value)} value={sourceLang} className='text-sm text-[#3C4043] bg-transparent border-none focus:outline-none cursor-pointer'>
                        {languages.map((language) => (
                            <option key={language.code} value={language.code}>{language.name}</option>
                        ))}
                    </select>

                    <button onClick={swaperTranslate} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <SvgTranslate />
                    </button>

                    <select onChange={(e) => setTargetLang(e.target.value)} value={targetLang} className='text-sm text-[#3C4043] bg-transparent border-none focus:outline-none cursor-pointer'>
                        {languages.map((language) => (
                            <option key={language.code} value={language.code}>{language.name}</option>
                        ))}
                    </select>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='p-4'>
                        <textarea
                            value={sourceText}
                            onChange={(e) => setSourceText(e.target.value)}
                            className='w-full h-40 text-md text-[#3C4043] bg-transparent border-none focus:outline-none resize-none'
                            placeholder='Digite o texto aqui...'>
                        </textarea>
                    </div>
                    <div className='relative  bg-[#F5F5F5] border-l border-gray-300'>
                        <div className='absolute flex items-center justify-center inset-0'>
                            {isLoading ? (
                                <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500'></div>
                            ) : (
                                <p className='absolute top-0 left-0 text-md px-2 py-4 text-[#3C4043]'>{translatedText}</p>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContentTranslate
