import { FC } from 'react'
import corporate from '../../images/corporate.jpg'

export const Corporate: FC = () => {
  return (
    <div className="flex gap-10 mt-10 h-[500px]">
      <div className="w-1/3 flex flex-col justify-between h-full">
        <div className="mt-10 pt-0.01 pb-12 border-l border-solid border-slate-300">
          <div className="-mt-6 relative -left-[7px]">
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.2em] before:left-[0]">
              The number of employees is unlimited
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              2 books (Students book and Home book)
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Branded Grammar notebook
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Academic Support Service
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              The teacher comes to you with all the devices
            </p>
          </div>
        </div>
        <div className="uppercase text-3xl bg-slate-600 py-4 text-center text-slate-300 mt-3 cursor-pointer hover:bg-slate-300 hover:text-slate-600 transition-all font-semibold">
          download offer
        </div>
      </div>
      <div className="w-2/3 object-cover h-full">
        <img src={corporate} alt="English Language Room" className="w-full h-full" />
      </div>
    </div>
  )
}
