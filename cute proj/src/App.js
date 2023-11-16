import './App.css';
import LoginSignup from './components/login';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Dogbreed from './components/dogbreed';
import ABOUT from './components/aboutus';
import Contact from './components/contactus';

function App() {
  return (
    <div>
     
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/Login' element={<LoginSignup/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/dogbreed' element={<Dogbreed/>}/>
       <Route path='/about' element={<ABOUT/>}/>
       <Route path='/contact' element={<Contact/>}/>

      


       </Routes>
       <Footer/>

       </BrowserRouter>
    </div>
  );
}

export default App;
