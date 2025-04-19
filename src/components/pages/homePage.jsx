import React from 'react'
import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import TestimonialSwipe from '../sections/Testimonials'
import Portfolio from '../sections/Protfolio'

function HomePage() {
  return (
    <div>

        <Home />
        <Portfolio />
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