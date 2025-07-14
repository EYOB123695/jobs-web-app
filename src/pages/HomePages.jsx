import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings'; 
import Viewalljobs from '../components/Viewalljobs';
const HomePages = () => {
  return (
    <> 
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <Viewalljobs/>
    </>
  )
}

export default HomePages