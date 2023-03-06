import React from 'react'
import Carousal from '../elements/carousel/carousal'
import Services from '../elements/features/services'
import StoryCards from '../elements/features/storyCards'
import Footer from '../elements/footers/footer'
import HeroMain from '../elements/heros/heroMain'
import MainNavbar from '../elements/navbars/mainNavbar'

const LandingPage = () => {
  return (
    <>
    <MainNavbar/>
    <HeroMain/>
    <StoryCards/>
    <Carousal/>
    <Services/>
    <Footer/>
    </>
  )
}

export default LandingPage
