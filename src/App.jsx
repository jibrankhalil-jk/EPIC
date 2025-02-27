import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Insights from './components/Insights'
import NavBar from './components/Navbar'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import Testmonials from './components/Testmonials'

function App() {
  return (
    <>
      <div className='bg-[url(/bg.svg)] bg-cover'>
        <NavBar />
        <Hero />
        <Insights />
        <Stats />
        <Pricing />
        <Testmonials />
        <Faqs />
        <Footer />
      </div>
    </>
  )
}

export default App