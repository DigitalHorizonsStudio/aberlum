import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom'; 
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';

export const NavbarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  // style={{backgroundColor: '#3585A3'}}
  return (
    <div className="mx-auto lg:px-20 px-8 bg-custom-gradient" >
      <Navbar variant="dark" expand="lg" style={{ color: '#ffffff' }}>
        <Navbar.Brand as={Link} to="/">
          <img style={{ width: '70px', height: '70px' }} src={logo} alt="Aberlum Logo" />
        </Navbar.Brand>
        <div className="lg:hidden gap-3 ml-5 flex flex-row items-center justify-center text-center">
            

        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" color='#ffffff' />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/works" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Productos & Servicios</Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Proveedores</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Contacto</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Sobre nosotros</Nav.Link>
          </Nav>
          <Nav className="flex flex-row items-center gap-3 lg:justify-end">
            {/* Iconos de redes sociales */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-3">
              <ul className="flex flex-col justify-center text-xs">                 
                  <a href="https://www.instagram.com/aberlum.aberturas/">
                    <img src={Instagram} alt="Instagram" className="w-5 h-5 mx-2" />
                  </a>                
                
                <a href="https://wa.me/message/JRJBPS5ZUAC4H1" className="mt-2">
                    <img src={Whatsapp} alt="WhatsApp" className="w-5 h-5 mx-2" />
                </a>             
              </ul>
            </div>

          

              {/* Iconos de redes sociales */}
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
