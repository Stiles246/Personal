import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import { heroText, featuresText, bannerText, aboutText, portfolioText, contactText, displayText } from '../Data'
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Features from '../Features/Features'
import Banner from '../Banner/Banner'
import Testimonial from '../Testimonial/Testimonial'
import Faq from '../Faq/Faq'
import Trustee from '../Trustee/Trustee'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Display from '../Display/Display'
import Footer from '../Footer/Footer'

const Home = () => {

  return (
    <div>
      <HeroSection {...heroText} />
      <Services />
      <Portfolio {...portfolioText}/>
      <About {...aboutText}/>
      <Features {...featuresText}/>
      <Banner {...bannerText}/>
      <Testimonial />
      <Faq />
      <Trustee />
      <Blog />
      <Contact {...contactText} />
      <Display {...displayText} />
      <Footer />
    </div>
  )
}

export default Home
