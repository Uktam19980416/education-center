import {FC} from 'react'
import EducationInfo from './EducationInfo'
import Prices from './Prices'

const Home: FC = () => {
  return (
    <>
      <div className="bg-main-bg h-screen bg-cover"></div>
      <div className="container w-[1440px] max-w-4/5 mx-auto mt-20">
        <EducationInfo />
        <Prices />
      </div>
    </>
  )
}

export default Home