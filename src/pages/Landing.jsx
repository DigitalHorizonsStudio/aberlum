import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import Footer from '../components/Footer'
import { LandingCarousel } from '../components/LandingCarousel'


export const Landing = () => {
  return (
      <div className="min-h-screen flex-col" style={{backgroundColor: '#110A0C'}}>
          
        <NavbarComponent />
        
        <div className=''>
        <LandingCarousel />
        </div>
        
        <Footer />
       
      </div>
    )
}
