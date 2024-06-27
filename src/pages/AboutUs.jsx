import Footer from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import aboutUsImage from '../assets/logo/logo.png';


export const AboutUs = () => {

  
  return (
    <div>
    <NavbarComponent />
    <div className='flex-1'>
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-5xl mb-4 inline-block border-b-[1px] border-white font-montserrat sm:px-16">Nuestra historia</h2>
          </div>
          <img loading='lazy' className="mx-auto w-full max-w-full md:max-w-none" src={aboutUsImage} alt="About Us" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}
