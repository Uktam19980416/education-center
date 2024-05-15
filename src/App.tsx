import Careers from './components/Careers'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PublicOffer from './components/PublicOffer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="public-offer" element={<PublicOffer />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
    </>
  )
}

export default App
