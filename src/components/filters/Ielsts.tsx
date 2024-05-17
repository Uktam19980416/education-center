import { FC } from 'react'
import ielts from '../../images/ielts.jpg'

export const Ielts: FC = () => {
  return (
    <div className="flex gap-10 mt-10 h-[500px]">
      <div className="w-1/3 flex flex-col justify-between h-full">
        <div className="mt-10 pt-0.01 pb-12 border-l border-solid border-slate-300">
          <div className="-mt-6 relative -left-[7px]">
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.2em] before:left-[0]">
              Group of 13 (±1) students
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Our Students’ App and 1 book (Students’ book)
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Branded Grammar notebook
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Academic Support Service
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Video Arsenal for each lesson
            </p>
            <p className="relative pl-10 text-xl mt-5 before:content-[''] before:w-[0.7em] before:h-[0.7em] before:rounded-full before:bg-slate-600 before:absolute before:transform before:translate-x-[-0.5px] before:translate-y-[0.4em] before:left-[0]">
              Mock IELTS every week
            </p>
          </div>
        </div>
        <div className="border-b-2 border-solid border-slate-600 w-fit">
          <p className="text-2xl font-semibold">
            Price: <span className="text-3xl font-bold">888 000 UZS</span>
          </p>
        </div>
        <div className="uppercase text-3xl bg-slate-600 py-4 text-center text-slate-300 mt-3 cursor-pointer hover:bg-slate-300 hover:text-slate-600 transition-all font-semibold">
          Sign Up
        </div>
      </div>
      <div className="w-2/3 object-cover h-full">
        <img
          src={ielts}
          alt="English Language Room"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
