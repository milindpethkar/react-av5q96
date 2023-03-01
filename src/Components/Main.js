import React from 'react';

import Main from './Components/Main';
import Contact from './Contact';
import About from './Components/About';
import Services from './Services';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Hello this is Main dix</h1>
      <div
        className="rounded-lg "
        style={{
          color: 'white',
          background: `url('https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2017&q=80')`,
          backgroundColor: 'hsla(0, 0%, 31%, 1)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <h1 className="text-5xl text-white ">
          The Future of
          <br />
          <span> Work 2023 Report</span>
        </h1>
        <div className="p-16 md:grid place-items-center pt-48 ">
          <Link to="/main">
            <img
              className="w-48 h-48 "
              src="https://th.bing.com/th/id/R.e4c3c2a1d381b8ba3af3d54b75a8b605?rik=ylb%2fV6AyUxf3Tw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-play-button-transparent%2fwhite-play-button-transparent-19.png&ehk=mqhYXxXHaK%2fH84dGFhumE5vpomuGL7sfWyGjPalHYDU%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div></div>
      <div>
        <img
          className="rounded-lg"
          src="https://www.infosys.com/content/dam/infosys-web/en/future-work-report.jpg"
          alt=""
        />
      </div>
      <div className="w-full relative text-center grid justify-center items-center">
        <img
          className="p-10 rounded-lg "
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/future-work2023-lead.jpg"
          alt=""
        />
         <div className="absolute left-0 top-0  w-full h-full bg-gray-100 opacity-0  opacity-0 hover:opacity-100 duration-700 hover:h-full  ">
            <h1 className="text-2xl text-black pt-48 ">Experience</h1>
            <h1></h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300 pt-48"
              href="#"
            >
            Back in 2015, our founders noticed that the rapidly evolving industry required professionals to continuously upskill themselves as learning for professionals comes to a halt after entering a working space. This was when upGrad was formed to impact the lives of working professionals by helping them upskill while they work. With an endeavor to facilitate quality education to the future workforce through our programs, we continue to build online learning as interactive as a classroom setup.
            </a>
          </div>
      </div>
      <div className="w-full">
        <div className=" flex p-24">
          <div className="w-1/2 relative">
            <img
              className=""
              src="https://www.infosys.com/content/dam/infosys-web/en/home/images/experience.jpg"
              alt=""
            />
             <div className="absolute left-0 top-0  w-full h-full bg-gray-100 opacity-0  opacity-0 hover:opacity-100 duration-700 hover:h-full  ">
            <h1 className="text-2xl text-white">Experience</h1>
            <h1></h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
             Learn
            </a>
          </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-1/2 relative">
              <div className='relative'>
              <img
                className=" hover:w-32"
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg"
                alt=""
              />
               <div className="absolute left-0 top-0  w-full h-full bg-gray-100 opacity-0  opacity-0 hover:opacity-100 duration-700 hover:h-full  ">
            <h1 className="text-2xl text-white">Experience</h1>
            <h1></h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
             Learn
            </a>
          </div>
              </div>
              <div className='relative'>
              <img
                className=" hover:w-32"
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg"
                alt=""
              />
               <div className="absolute left-0 top-0  w-full h-full bg-gray-100 opacity-0  opacity-0 hover:opacity-100 duration-700 hover:h-full  ">
            <h1 className="text-2xl text-white">Experience</h1>
            <h1></h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
             Learn
            </a>
          </div>
              </div>
            </div>
            <div className="w-1/2 hover:w-32">
              <div className='relative'>
              <img
                className=" hover:w-32"
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg"
                alt=""
              />
               <div className="absolute left-0 top-0  w-full h-full bg-gray-100 opacity-0  opacity-0 hover:opacity-100 duration-700 hover:h-full  ">
            <h1 className="text-2xl text-white">Experience</h1>
            <h1></h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
             Learn
            </a>
          </div>
              </div>
              <div className='relative'>
              <img
                className=" scale-50 hover:w-32"
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/assure.jpg"
                alt=""
              />
               <div className="absolute left-0 top-0  w-full h-full bg-gray-100 opacity-0  opacity-0 hover:opacity-100 duration-700 hover:h-full  ">
            <h1 className="text-2xl text-white">Experience</h1>
            <h1></h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
             Learn
            </a>
          </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="group relative">
          <img
            className="w-48 object-cover"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/t-shirt-example.png"
          />
          <div className="absolute left-0 top-0  w-48 h-full grid justify-center items-center bg-indigo-700 opacity-0 hover:opacity-100 duration-700 hover:h-full ">
            <h1 className="text-2xl text-white">Fiction T-Shirt Store</h1>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
              Continue Shopping
            </a>
          </div>
        </div> */}
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Contact />
      </div>
      <div></div>
    </div>
  );
}
export default Main;
