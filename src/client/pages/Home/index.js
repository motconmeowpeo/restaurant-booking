import React from 'react'
import About from './About'
import Meal from './Meal'
import DeliJump from './Delijump'
import Blog from './Blog'
import Testimonial from './Testimonial'
import Category from './Category'
export default function Home() {
  return (
    <div>
    <About/>
    <Category/>
    <Meal/>
    <DeliJump/>
    <Testimonial/>
    <Blog/>
    </div>
  )
}
