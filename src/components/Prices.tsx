import { FC, useState } from 'react'
import { EnglishLanguage } from './filters/EnglishLanguage'
import { Ielts } from './filters/Ielsts'
import { Corporate } from './filters/Corporate'

const Prices: FC = () => {
  const activeClass = 'bg-slate-800 text-slate-100'
  const mainClass =
    'bg-slate-300 text-2xl font-bold text-center py-4 uppercase cursor-pointer hover:bg-slate-800 hover:text-slate-100 transition-all shadow-lg shadow-slate-600'
  const [activeTab, setActiveTab] = useState(1)
  const toggleTab = (tab: number) => setActiveTab(tab)
  const setActiveClass = (index: number) =>
    activeTab === index ? activeClass : ''

  return (
    <div className="mt-20">
      <h1 className="text-6xl font-bold">Prices</h1>

      <div className="p-10 border bottom-6 mt-10">
        <div className="grid grid-cols-3 gap-5">
          <div
            className={`${mainClass} ${setActiveClass(1)}`}
            onClick={() => toggleTab(1)}
          >
            English language
          </div>
          <div
            className={`${mainClass} ${setActiveClass(2)}`}
            onClick={() => toggleTab(2)}
          >
            ielts
          </div>
          <div
            className={`${mainClass} ${setActiveClass(3)}`}
            onClick={() => toggleTab(3)}
          >
            corporate
          </div>
        </div>
        {activeTab === 1 && <EnglishLanguage />}
        {activeTab === 2 && <Ielts />}
        {activeTab === 3 && <Corporate />}
      </div>
    </div>
  )
}

export default Prices
