import React from 'react';
import './style.css'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Main from './Components/Main';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Product from './Components/Product';
import Bhondu from './Bhondu';




export default function App() {
 


  return (
    <div>
      <div className='p-5'>
      <BrowserRouter>
       
          <Bhondu/>
          
         {/* <Main/> */}
            <Routes>
              <Route path='/' element={<Main/>} />
              
              <Route path='/services ' element={<Services/>} />
              <Route path='/about'element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/product' element={<Product/>} />
            </Routes>
            
         
      </BrowserRouter>
      </div>
    </div>
  );
}
