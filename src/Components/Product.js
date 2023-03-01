import React from 'react';
import { useNavigate} from "react-router-dom";

function Product() {
  let navigate = useNavigate();
  return (
    <div className="text-gray-700">
        <button onClick={() => navigate(-1)}>Back</button> 
      <div className="flex  content-cnter justify-center gap-3 w-full pt-5">
        <div className="w-1/2 md:p-24 ">
          <img className='rounded-sm ' src="https://assets.website-files.com/61e57244c283e5456130c457/61e945a0392884655da8bf78_step_illustr.svg" />
        </div>
        <div className=" w-1/2 md:p-24  ">
          <h1 className="text-xl">Syllabus of courses</h1>
          <h1 className="text-s">Videos from professionals</h1>
          <h1 className="text-sm">
            Maharashtra is a state in the western peninsular region of India
            occupying a substantial portion of the Deccan Plateau. Maharashtra
            is the second-most populous state in India and the second-most
            populous country subdivision globally.
          </h1>
        </div>
      </div>
      <div className="flex  content-cnter justify-center ">
        <div className=" w-1/2 md:p-24 ">
          <h1 className="text-xl">Scholarship Exam</h1>
          <h1 className="text-s">We Conduct the Exam of all State board</h1>
          <h1 className="text-sm">
            which had a mud fortification during this period, as well as an
            elliptical temple with fire pits.In the Late Harappan period there
            was a large migration of people from Gujarat to northern
            Maharashtra.
          </h1>
        </div>
        <div className='w-1/2 md:p-24 p-5'>
          <img
            className="w-full h-full rounded-sm "
            src="https://th.bing.com/th?id=ODL.731c7977242d3e91651fb9b16eaba335&w=143&h=110&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&dpr=1.5&pid=13.1"
          />
        </div>
        
      </div>
    </div>
  );
}
export default Product;
