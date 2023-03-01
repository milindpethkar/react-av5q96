import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import {useState} from 'react'
import { Link } from 'react-router-dom';

function Bhondu() {
  const [toggle, setToggle] = useState(true)

  // const handleClick = () => {
  //   setNav(!Nav);
  // };
  // const handleOff = () => {
  //   setNav(false);
  // };
  // const handleSubmit = () => {
  //   setValue();
  // };

  return (
    <div>
      <div>
        <nav className=' flex  '>
          <div className="w-1/2 md:w-3/4 lg:w-3/4 ">
            <img src="" />
            <h1 className="text-3xl text-pink-400 hover:text-white  font-bold ">Margaret</h1>
          </div>
          <div
            className=" w-1/2 md:hidden"
          ><img  onClick={() => setToggle(!toggle)} className="w-10 h-10"  src="https://static.vecteezy.com/system/resources/previews/009/362/781/original/app-menu-icon-sign-symbol-design-free-png.png" alt="" />
           
           {toggle && ( <ul>
              

              <div className="order-last flex flex-col items-end text-pink-400 space-y-3  md:flex-row md:items-start md:order-first md:space-y-0 md:space-x-3  ">
                
              
                
                
                <Link className="hover:text-white" id="menu-item" to="/">
                  Main{' '}
                </Link>
                <Link className="hover:text-white" id="menu-item" to="/contact">
                  Contact{' '}
                </Link>
                <Link className="hover:text-white" id="menu-item" to="/about">
                  About{' '}
                </Link>
                <Link
                  className="hover:text-white"
                  id="menu-item"
                  to="/services "
                >
                  Services{' '}
                </Link>
                <Link className="hover:text-white" id="menu-item" to="/product">
                  Product{' '}
                </Link>
              </div>
            </ul>)}
            
          </div>
          <div className='invisible md:visible'>
          <ul>
              

              <div className="order-last flex flex-col items-end text-pink-400 space-y-3  md:flex-row md:items-start md:order-first md:space-y-0 md:space-x-3  ">
                
              
                
                
                <Link className="hover:text-white" id="menu-item" to="/">
                  Main{' '}
                </Link>
                <Link className="hover:text-white" id="menu-item" to="/contact">
                  Contact{' '}
                </Link>
                <Link className="hover:text-white" id="menu-item" to="/about">
                  About{' '}
                </Link>
                <Link
                  className="hover:text-white"
                  id="menu-item"
                  to="/services "
                >
                  Services{' '}
                </Link>
                <Link className="hover:text-white" id="menu-item" to="/product">
                  Product{' '}
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Bhondu;
