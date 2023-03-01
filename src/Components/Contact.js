import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import { useNavigate} from "react-router-dom";

function Contact() {
  let navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate(-1)}>Back</button> 
      <div>
        <Form />
      </div>
      <div className="pt-10 bg-gray-100 text-gray-700 ">
        <div className="">
          <div>
            <div className="flex justify-between">
            
              <div className='w-1/2'>
              {/* <Link to ='/'> <img
                  className="w-24 h-24"
                  src="https://www.edx.org/images/logos/edx-logo-registered-elm.svg"
                  alt=""
                /></Link> */}
              <h1 className="text-lg text-pink-400 hover:text-white  font-bold ">Margaret</h1>
              </div>
              <div className="flex gap-5 p-10">
              <Link to ='/'> <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
                  alt=""
                /></Link>
               <Link to ='/'> <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/3669/3669691.png"
                  alt=""
                /></Link>
                <Link to ='/'><img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/4401/4401412.png"
                  alt=""
                /></Link>
                <Link to ='/main'><img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png"
                  alt=""
                /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:gap-10 justify-center content-center p-5">
          <Link to="/about">About Us</Link>
          <Link to ='/contact'>Contact Us</Link>
          <Link>Adverties WITH Us</Link>
          <Link>Privacy </Link>
          <Link>Terms & CONDITION</Link>
        </div>
        <hr className="py-5" />
        <div className="flex gap-10 justify-center content-center ">
          <Link>
            {' '}
            <h1 className="text-s  px-24">
              For any feedback or complaint, email to:
              compliant_gro@jagrannewmedia.com
            </h1>
          </Link>
        </div>
        <hr className="py-5" />
        <div className="flex gap-10 justify-center content-center">
          J Praashan Ltd @ 2023
        </div>
      </div>
    </div>
  );
}
export default Contact;
