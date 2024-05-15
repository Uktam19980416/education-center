import { FC } from 'react'
import logo from "../images/logo.png"
import en from "../images/en.png"
import ru from "../images/ru.png"
import uz from '../images/uz.png'
import Select, { StylesConfig } from 'react-select';
import { OptionType } from '../types/types'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {

  const option: OptionType[] = [
    {
      value: 'uz',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium">Uzbek</p>{' '}
          <img src={uz} alt="Uzbekistan Flag" className="w-8" />
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium">English</p> <img src={en} alt="UK Flag" className="w-8" />
        </div>
      ),
    },
    {
      value: 'ru',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium">Russian</p>{' '}
          <img src={ru} alt="Russian Flag" className="w-8" />
        </div>
      ),
    },
  ]

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'blue' : 'white',
    }),
  }

  return (
    <div className="bg-slate-100 fixed top-0 left-0 w-full z-20">
      <div className="container w-[1440px] max-w-4/5 mx-auto">
        <div className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="lg:w-28 max-lg:w-20" />
            <div>
              <p className="text-2xl font-semibold">Company Name</p>
              <p className="text-sm text-slate-600">Company Slogan</p>
            </div>
          </div>
          <nav>
            <ul className="flex items-center justify-between gap-10">
              <li className="list-none">
                <a href="#about" className="text-xl font-medium text-slate-700">
                  About Us
                </a>
              </li>
              <li className="list-none">
                <a href="#team" className="text-xl font-medium text-slate-700">
                  Team
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#prices"
                  className="text-xl font-medium text-slate-700"
                >
                  Prices
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#gallery"
                  className="text-xl font-medium text-slate-700"
                >
                  Gallery
                </a>
              </li>
              <li className="list-none">
                <Link
                  to="/public-offer"
                  className="text-xl font-medium text-slate-700"
                >
                  Public offer
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/careers"
                  className="text-xl font-medium text-slate-700"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <Select
              options={option}
              styles={customStyles}
              defaultValue={option[0]}
              isSearchable={false}
              components={{ IndicatorSeparator: () => null }}
            />
            <div className="rounded-full py-2 px-3 border bottom-2 bg-slate-400 cursor-pointer">
              <i className="fa-regular fa-user cursor-pointer"></i>
            </div>
            <div className="rounded-full py-2 px-3 border bottom-2 bg-slate-400 cursor-pointer">
              <i className="fa-solid fa-headset"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar