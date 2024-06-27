import Correo from "../assets/logo/correo.png"
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';

const people = [
    {
      name: 'Showroom',
      role: 'Gorriti 885, Bahia Blanca',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_MOFjeoA-lRyOIqyLKjqU09knZZS6EHTCw&s',
    },
    {
        name: 'Fabrica',
        role: 'Clementina Villamayor 598, Coronel Dorrego',
        imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzXt6tpYfTPH3NRbHuNlOOXE_YU4kWI36DQ&s',
      },
  ]
  
  export default function Contacto() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl ">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">Encontranos en:</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              ventas@aberlumaberturas.com
            </p>
            <div className="flex pt-5 pb-2">
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
            
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-30 w-28 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-cyan-400">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-gray-400">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  