import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import Footer from '../components/Footer'
import Proveedores from '../components/Partners'



export const Partners = () => {
  return (
      <div style={{backgroundColor: '#110A0C'}}>
        <NavbarComponent />        
        <Proveedores />        
        <Footer />
       
      </div>
    )
}
