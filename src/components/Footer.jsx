import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo/logo.png';
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';
import Correo from '../assets/logo/correo.png';


const Footer = () => {

    return (
        <footer className="bg-custom-gradient h-min mt-3 flex flex-col lg:flex-row items-center justify-between">
    <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
       
        <div className=" text-black mb-3 lg:ml-8 lg:mt-3 hidden lg:block ">
            {/* <h3 className="sm:ml-5 text-m font-semibold mb-3">Aberlum</h3> */}
            <ul className="sm:ml-5 list-none font-normal text-sm space-y-3 text-start">
                <li><Link to="/aboutus" className="text-white hover:text-black ">Nosotros</Link></li>
                <li><Link to="/services" className="text-white hover:text-white">Proveedores</Link></li>
                <li><Link to="/works" className="text-white hover:text-white">Productos</Link></li>
                <li><Link to="/contactus" className="text-white hover:text-white">Contacto</Link></li>
            </ul>
        </div>

       
        <Link to="/" className="my-2 lg:my-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img src={Logo} alt="Logo" className="w-25 h-25 mx-auto lg:mx-0 " />
        </Link>

        <div className="text-white text-xs space-y-1 text-center ml-9 mt-1 mr-10 lg:mt-0 lg:text-right">
            <div className="flex justify-center pb-2">
                <ul className="flex flex-row text-xs pt-1">
                    <li>
                        <a href="https://wa.me/message/JRJBPS5ZUAC4H1">
                            <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6 mx-2" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aberlum.aberturas/">
                            <img src={Instagram} alt="Instagram" className="w-6 h-6 mx-2" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ventas@aberlumaberturas.com">
                            <img src={Correo} alt="Correo" className="w-6 h-6 mx-2" />
                        </a>
                    </li>
                </ul>
            </div>
            <p>Aberlum SA</p>
            <p>Gorriti 885, Bahia Blanca, Argentina</p>
            <p>Clementina Villamayor 598, Coronel Dorrego, Argentina</p>
        </div>
    </div>
</footer>

    );
}

export default Footer;
