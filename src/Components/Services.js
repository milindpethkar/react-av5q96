import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate} from "react-router-dom";




function Services (){
  let navigate = useNavigate();


  return <div className='pt-48 p-3'>
      <button onClick={() => navigate(-1)}>Back</button> 
    <div className='bg-black grid text-center md: flex h-32 text-white content-cnter justify-center'>
    <h1 className='font-bold'> Get your questions to ask our experts</h1>
    <div className=''> <div className='w-80 h-10 bg-white text-black flex rounded-sm m-10  gap-5 ' >
        <input className='w-80 h-10 bg-white text-black flex rounded-sm border-none  ' type="text" placeholder=' Write Your Questions Here'/>
        
          <div className='pt-3 pr-3  '>  <Link to='/About'><button className='bg-orange-700 text-white w-10 rounded-sm '>
             ASK
           </button> </Link></div>
      </div></div>
    </div>
    <div style={{background:`url('https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2017&q=80')` ,
  backgroundColor: 'hsla(0, 0%, 21%, 1)',
  backgroundBlendMode: 'overlay',
  backgroundSize: 'cover',}} class='text-white'>
    <div  className='pl-3'>
      <h1 className='text-xl'>Services</h1>
      <h1 className='text-xs'>As a mission-driven organization, we're relentlessly pursuing our vision of a world where every learner can access education to unlock their potential, without the barriers of cost or location.</h1>
      <h1  className='text-xs'>The Chalukya dynasty ruled from the sixth to the eighth centuries CE, and the two prominent rulers were Pulakeshin II, who defeated the north Indian Emperor Harsha, and Vikramaditya II, who defeated the Arab invaders in the eighth century.</h1>
    <div className='py-5 px-5'>
    <button className='bg-gray-700 w-24 text-white w-10 rounded-sm hover:text-lg '> Learn More <img src="" alt=""/></button>
    </div>
    </div>
      </div>
      
  </div>
}
export default Services
// Experience
// Design-led transformation. From brand to experience
// Create unified digital experiences to enhance customer experience and build loyalty

// Insight
// Insight
// Do 100x more. Do it yourself
// Build an analytics-driven enterprise to monetize data

// Innovate
// Innovate
// Bridge the physical and digital, with software and platforms
// Engineer digital-first products and offerings to create new revenue streams

// Accelerate
// Accelerate
// Keep your core. Keep innovating
// Find your path to non-disruptive renewal of IT landscapes

// Assure
// Assure
// Digital-trust. Assured.
// To be the catalyst for growth by solving complex cybersecurity problems, minimizing risks and building cyber resilience for your businesses across the globe

// Service offerings
// Explore industries
// Our platforms
// Navigate your next
// One Stop Shop For Tennis Fans. Download The New App.
// One Stop Shop For Tennis Fans. Download The New App.
// Our Purpose:
// To amplify human potential and create the next opportunity for people, businesses and 