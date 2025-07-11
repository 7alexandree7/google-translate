import Header from './Components/Header/Header'

function App() {

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'nl', name: 'Nederlands' },
  ]

  return (
    <div className='min-h-screen bg-[#F1F3F4] flex flex-col'>
      <Header />

      <main className='flex flex-grow items-start justify-center px4 py-8 '>
        <div className='w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden'>

          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <select className='text-sm text-[#3C4043] bg-transparent border-none focus:outline-none cursor-pointer'>
              {languages.map((language) => (
                <option key={language.code} value={language.code}>{language.name}</option>
              ))}
            </select>

            <button className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
              <svg

                className="w-5 h-5 text-headerColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>

            <select className='text-sm text-[#3C4043] bg-transparent border-none focus:outline-none cursor-pointer'>
              {languages.map((language) => (
                <option key={language.code} value={language.code}>{language.name}</option>
              ))}
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='p-4'>
              <textarea
                className='w-full h-40 text-md text-[#3C4043] bg-transparent border-none focus:outline-none resize-none'
                placeholder='Digite o texto aqui...'>
              </textarea>
            </div>
            <div className='p-4 bg-[#F5F5F5] border-l border-gray-300'></div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
