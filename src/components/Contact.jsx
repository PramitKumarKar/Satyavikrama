import React from "react";

const About = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  text-orange-500  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full justify-center items-center">
        <div className="pb-8">
          <p className="text-4xl font-bold  border-b-4 border-gray-500 inline">
            Contact Us
          </p>
        </div>
        <div className="h-fit w-fit bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100">
           <p className="text-3xl mt-2 font-bold flex justify-center items-center">
                Registered Office
           </p>
           <p className="text-xl font-semibold mt-2">
            LARICA TOWNSHIP HOUSING COMPLEX, <br />
            BARASAT BARRACKPORE ROAD, OPPOSITE LOKENATH MANDIR, <br />
            KOLKATA,  INDIA  PIN – 700126
           </p>
        </div>
        <div className="h-fit w-fit bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100 mt-20">
           <p className="text-3xl mt-2 font-bold flex justify-center items-center">
                Contact No.
           </p>
           <p className="text-xl font-semibold mt-2">
           Email: consultancy.satyavikrama@gmail.com <br />
           Mobile & WhatsApp: +91 8794660816 <br />
           Website: https://satyavikramaconsultancyprivatelimited.vercel.app/
           </p>
        </div>
        <div className="h-fit w-fit bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100 mt-20">
           <p className="text-3xl mt-2 font-bold flex justify-center items-center">
           Recruiters / Employers
           </p>
           <p className="text-xl font-semibold mt-2">
           Please contact us to our Mobile Numbers for any requirement of Manpower. We ensure you to provide our sincere response from our end as early as possible.  Please Call Mobile or WhatsApp Call at +91 8794660816 or Email at  consultancy.satyavikrama@gmail.com for any Queries.  We will revert you back with our Experts’ suggestions as early as possible
           </p>
        </div>
    
      </div>
    </div>
  );
};

export default About;