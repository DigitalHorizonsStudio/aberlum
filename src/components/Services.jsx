import React from 'react';
import { useNavigate } from 'react-router-dom';
import dvh from '../assets/Servicios/dvh.jpeg';
import persianas from '../assets/Servicios/persianas.jpeg';
import cortinas from '../assets/Servicios/cortinas.jpg';
import aberturas from '../assets/Servicios/aberturas.png';
import cerramientos from '../assets/Servicios/cerramientos.png';
import perfiles from '../assets/Servicios/perfiles.jpg';
// import Audiovisual from '../assets/logo/logo.png'
// import Recording from '../assets/logo/logo.png'

import '../components/Services.css'

export const Services = () => {
  const navigate = useNavigate();
  
  
  const handleServiceClick = (title) => {
    navigate(`/services/${title}`, { state: { title } });
  };

  return (

    <div className="flex flex-col items-center mx-auto sm: px-4 sm: py-0 py-6 px-20 pb-20 bg-service">
      {/* <h1 className="text-3xl sm:text-5xl xl:text-6xl md:text-black sm: mb-2 sm: pt-8 xl:mt-10 text-center font-semibold cl-title " style={{ fontFamily: 'Montserrat' }}>Productos</h1>
      <h1 className="text-xl sm:text-4xl xl:text-4xl md:text-black sm: mb-4 text-center sm:pt-3 sm:pb-6 font-semibold cl-title opacity-80" style={{ fontFamily: 'Montserrat' }}>Variedades</h1> */}
      
     
      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:pt-6 sm:gap-0 sm:mt-4 lg:pb-6 sm:pb-0 lg:gap-10 ">

        <ServiceLink image={aberturas} title='Aberturas' onClick={() => handleServiceClick("live sound")} />
        <ServiceLink image={cerramientos} title='Cerramientos' onClick={() => handleServiceClick("staging")} />
        <ServiceLink image={cortinas} title='Cortinas' onClick={() => handleServiceClick("lighting")} />
        <ServiceLink image={perfiles} title='Perfiles' onClick={() => handleServiceClick("video")} />
        <ServiceLink image={persianas} title='Persianas'onClick={() => handleServiceClick("equipmentRental")} />
        <ServiceLink image={dvh} title='Vidrios DVH' onClick={() => handleServiceClick("entertainment")} />
      </div>
      {/* <div className="w-full ">
        <div className='relative flex justify-center sm:pt-0 lg:pt-4'>
          <button onClick={() => handleServiceClick("audiovisual")} className="relative">
            <img src={Recording} alt={'Recording'} loading='lazy' className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none', height: "10rem", width: "72rem", objectFit: "cover" }} />
            <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">'services.audiovisual'</h2>
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full shadow-lg">'services.new'</span>
          </button>
        </div>
        <div className='relative flex justify-center lg: mt-2 mt-8 mb-0 md:pt-4 pb-20 '>
          <button onClick={() => handleServiceClick("recording")} className="relative">
            <img src={Audiovisual} alt={'Audiovisual'} loading='lazy' className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none', height: "10rem", width: "72rem", objectFit: "cover" }} />
            <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">'services.recording'</h2>
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full shadow-lg">'services.new'</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

const ServiceLink = ({ image, title, onClick }) => {
  return (
    <div className="relative">
      <button onClick={onClick}>
        <img src={image} alt={title} loading='lazy' className="mobile-styles w-64 h-64 object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none'}} />
        <h2 className="opacity-80 absolute mt-8 inset-7 flex items-start justify-center text-xl font-bold text-center bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">{title}</h2>
      </button>
    </div>
  );
};
