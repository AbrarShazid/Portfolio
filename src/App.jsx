

import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';

function App() {


  return (

    <div className='font-primary'>
      <ToastContainer />
      
      <Navbar></Navbar>
   <Banner></Banner>
   <About></About>
   <Skills></Skills>
   <Projects></Projects>
   <Contact></Contact>
   <Footer></Footer>

   
   
   </div>
    
   
    
  )
}

export default App
