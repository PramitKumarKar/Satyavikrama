import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  text-orange-500  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Us
          </p>
        </div>
        <p className="text-3xl mt-5 font-semibold">
        Truth & Power Is held by the name – Satya Vikrama – Ultimate RAM
        </p>
        <p className="text-xl mt-4 font-semibold ">
        Our primary objective is to Cater as Job Consultants and to Provide Job to the Unemployed / Employed who seek better Job positions & Fresher’s who wish to have a good job after completion of their studies  to different Private Sector Industries / Companies / PSU/ Hotels Industries & in IT Sector (Software & Hardware) field.
        </p>
        <p className="text-xl mt-2 font-semibold">
        We have already tied up with different Companies/ Institutions for providing man power through our Consultancy. We are experienced in the Field of Cement Industry, Steel Industry, Hotel Industry, Information Technology (Hardware & Software) for more than a Period of 20 Years and  able to provide manpower to any sector of respect working field. 
        </p>
        <p className="text-xl mt-2 font-semibold">
        We have qualified Candidates which includes - Fresher’s / Experienced belonging to different categories of work field. We can place candidates as per requirement. Our Candidates can fulfil any Kind of Work required by Companies in any field of Work. We have already tied up with different Companies / Institutions for Providing Man Power through our Consultancy. We are experienced in the Field of Cement Industry, Steel Industry, Hotel Industry Information Technology (Hardware & Software) industry for not less than a Period of 20 Years or More and Can provide Manpower to any Sector of Work Field.
        </p>


        <div duration={500} smooth className=' flex items-center justify-center bg-orange-500 group text-white  w-fit px-6 py-3 my-2  rounded-md hover:cursor-pointer'>
            Explore
          </div>
         
      </div>
    </div>
  );
};

export default About;