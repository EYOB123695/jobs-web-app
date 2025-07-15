import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings'; 
import Viewalljobs from '../components/Viewalljobs';
const HomePages = () => {
  return (
    <> 
    <Hero title  = {"React devs"} subtitle = {"You will Find Jobs tailored to your skills"}/>
    <HomeCards/>
    <JobListings isHome={true} />
    <Viewalljobs/>
    </>
  )
}

export default HomePages