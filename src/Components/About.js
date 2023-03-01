import React from 'react';
import Contact from './Contact';
import { useNavigate} from "react-router-dom";

function About() {
 
  let navigate = useNavigate();
  
  return (
    <div>
       <button onClick={() => navigate(-1)}>Back</button> 
      <div className="md:px-32 gap-10">
        <div className="flex p-10 ">
          <div className="w-1/2 p-10">
            <h1 className="text-xl">Our Vision </h1>
            <h1>
              Powering career success for every member of the global workforce
              as their trusted lifelong learning partner.
            </h1>
          </div>
          <div>
            <img
              className="  md:w-80 md:h-48 rounded-sm "
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="flex p-10 ">
          <div className="w-1/2 p-10">
            <img
              className="  md:w-80 h-48 rounded-sm  "
              src="https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
          <div className="w-1/2 p-10">
            <h1 className="text-xl">Our Mission </h1>
            <h1>Making our learners achieve their desired outcomes.</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-blue-700 text-white p-10 py-5 px-10 text-center">
          <h1 className="text-3xl font-bold">Beginning of a revolution</h1>
          <h1 className="text-xs pt-10">
            Back in 2015, our founders noticed that the rapidly evolving
            industry required professionals to continuously upskill themselves
            as learning for professionals comes to a halt after entering a
            working space. This was when upGrad was formed to impact the lives
            of working professionals by helping them upskill while they work.
            With an endeavor to facilitate quality education to the future
            workforce through our programs, we continue to build online learning
            as interactive as a classroom setup.
          </h1>
        </div>
        
      </div>
      <Contact/>
    </div>
  );
}
export default About;
