import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  text-orange-500  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Us
          </p>
        </div>
        <p className="text-xl  font-semibold">
        We are a Group of an Expert Professional Team constituted with   “SATYAVIKRAMA CONSULTANCY SERVICES PRIVATE LIMITED” 
        </p>
        <p className="text-xl mt-4 font-semibold ">
        OUR PRIMARY OBJECTIVE is to Cater as Manpower Consultants and to Provide Job to the Unemployed / Employed who seeks better Job positions & Fresher’s who wish to have a good Job after completion of their Higher Studies  to different Private Sector Industries / Companies / PSU / Hotel Industries / IT Sector (Software & Hardware) field and Other Professional Services. 
        </p>
        <p className="text-xl mt-1 font-semibold">
        OUR OTHER ANCILLIARY OBJECTIVES ARE : <br />
 
      1.	GST & Income Tax- Which includes Professional Chartered Accountants & CMA & GST Suvidha Services supported & provided by Govt. of India.  <br />
      
      2.	Legal Advisory Services – Supreme Court & High Court Professional Lawyers will take initial decisions for Next Steps to be taken for any Legal Activities. Services will be preliminary provided Over Online Meeting by what’s App / Zoom / Google Meet by Video or Audio Call.  <br />
      
      3.	Financial Consultants – For Project Development – Assistance for Loans from Banks & Private Financial Services. Services will be preliminary provided Over Online Meeting by what’s App / Zoom / Google Meet by Video or Audio Call.  <br />
      
      
      4.	Project Consultant - For Cement Plant / Power Plant / Civil & Real Estate Construction Projects – Erection, Maintenance and Commissioning of Green & Brown Field Cement Plant & Power Plant as well as Operation & Maintenance. Services will be preliminary provided Over Online Meeting by what’s App / Zoom / Google Meet by Video or Audio Call.  <br />
      
      5.	ISO Consultant – For ISO Certification - Implementations &   Training. Services will be preliminary provided Over Online Meeting by what’s App / Zoom / Google Meet by Video or Audio Call.  <br />
      
      6.	Doctor Consultant – For Discussion with Specialized Doctor  for a Specific Problem for Hospitalization & Further Treatment & further suggestion’s. Services will be preliminary provided Over Online Meeting by what’s App / Zoom / Google Meet by Video or Audio Call. <br />
  
        </p>


        {/* <div duration={500} smooth className=' flex items-center justify-center bg-orange-500 group text-white  w-fit px-6 py-3 my-2  rounded-md hover:cursor-pointer'>
            Explore
          </div> */}
         
      </div>
    </div>
  );
};

export default About;