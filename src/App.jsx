
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { ServicesPage } from './pages/ServicesPage';
import { Partners } from './pages/Partners';
import { ContactUs } from './pages/Contactus';
import { AboutUs } from './pages/AboutUs';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<ServicesPage />} />
        <Route path="/services" element={<Partners />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
