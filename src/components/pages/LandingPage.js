import React from 'react'
import Carousal from '../elements/carousel/carousal'
import Services from '../elements/features/services'
import StoryCards from '../elements/features/storyCards'
import HeroMain from '../elements/heros/heroMain'
import FloatingButton from '../elements/translator'

const LandingPage = () => {

  return (
    <>
      <HeroMain />
      <StoryCards />
      <Carousal />
      <Services/>
    </>
  )
}

export default LandingPage
