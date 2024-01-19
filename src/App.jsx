
import './App.css'
import Header from './component/Header';
import FeaturesSection from './component/FeaturesSection';
import { Routes, Route} from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import ContactUs from './routes/ContactUs';
import Department from './routes/Department';


function App() {
  

  return (
       <div>
      <Header />
      <FeaturesSection />
      <Routes>
             <Route path='/about' element={<AboutUs/>}/>
             <Route path='/contact' element={<ContactUs/>}/>
             <Route path='/department' element={<Department/>}/>
      </Routes>
    </div>
  )
}

export default App
