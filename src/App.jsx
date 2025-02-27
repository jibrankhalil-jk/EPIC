import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Insights from './components/Insights'
import NavBar from './components/Navbar'
import Price from './components/Price'
import Testmonials from './components/Testmonials'

function App() {
  return (
    <>
      <div className='bg-[url(/bg.svg)] bg-cover'>
        <NavBar />
        <Hero />
        <Insights />
        <Testmonials />
        <Price />
        <Faqs />
        <Footer />
      </div>
    </>
  )
}

export default App