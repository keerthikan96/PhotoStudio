import React from 'react'
import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import TestimonialSwipe from '../sections/Testimonials'
import GoogleReviews from '../sections/GoogleReviews'
import Portfolio from '../sections/Portfolio'
import PhotographyServices from '../sections/photographyServices'

function HomePage() {
  return (
    <div>

        <Home />
        <PhotographyServices />
        <Portfolio />
     
        <GoogleReviews />
        <TestimonialSwipe />
        {/* <About />
        <Projects /> */}
        {/* <Contact /> */}
        {/* <ChatWidget /> */}
        {/* <GoToTopButton /> */}


    </div>
  )
}

export default HomePage