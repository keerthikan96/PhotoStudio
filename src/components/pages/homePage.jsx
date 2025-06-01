import React from 'react'
import { Home } from '../sections/Home'
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
       


    </div>
  )
}

export default HomePage