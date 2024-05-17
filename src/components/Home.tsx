import {FC} from 'react'
import EducationInfo from './EducationInfo'
import Prices from './Prices'
import { SignupForm } from './SignupForm'

const Home: FC = () => {
  return (
    <>
      <div className="bg-main-bg h-screen bg-cover"></div>
      <div className="container w-[1440px] max-w-4/5 mx-auto mt-20">
        <EducationInfo />
        <Prices />
      </div>
        <SignupForm />
    </>
  )
}

export default Home