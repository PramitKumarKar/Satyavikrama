import React from "react";

const About = () => {
  return (
    <div
      name="Services"
      className="w-full h-screen  text-orange-500  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Professional Services Provided
          </p>
          <p className="text-2xl font-semibold mt-4">
           We provide a wide range of services for freshers as well as experienced people thriving in the industry.
          </p>
          <p className="text-xl mt-4 font-semibold">
            1. MANAGED HR – MANPOWER / STAFFING SERVICES  – 
            India & Abroad  - EMPLOYMENT SERVICE CONSULTANTS <br />

            2. SOFTWARE SUPPORT - SAP / MICROSOFT NAVISION / ERP – Implementation – Maintenance – Modification / Customization of the Current Software as per Company or Personal Use. <br />

            3. COMPUTER HARDWARE – For Purchase of Corporate Servers or Home Computer for Personal Use. <br />

            4. ISO CONSULTANTS – ISO CERTIFICATION & TRAINING <br />

            5. GST SUVIDHA KENDRA – All GST related Services will be provided by Online & Offline support. <br />

            6. INCOME TAX CONSULTANTS - All GST & Income Tax related Services.
            LAW - CIVIL / CRIMINAL LEGAL ADVISORS – CONSULTANTS
            FINACIAL CONSULTANTS FOR PROJECTS – For Project Establishing of FACTORIES / REAL ESTATE / HOTELS ETC. Project Specialized DPR with Financial Assistance Support. <br />

            7. HIRE PROFESSIONALS FOR – CEMENT INDUSTRY & STEEL INDUSTRY LARGE / MEDIUM SCALE INDUSTRIES -  CONSULTANT ENGINEERS – MECHANICAL / ELECTRICAL / PROCESS / QUALITY CONTROL / IT / MATERIALS MANAGEMENT – TO BE HIRED FOR HIGH END TECHNICAL CONSULTANTS & ON SITE / OFF SITE SOLUTIONS.
            PROFESSIONALS - DOCTORS CONSULTATION SERVICES OVER PHONE / VIDEO CALL. <br />

            8. HOTEL BOOKING – 3 STAR AND ABOVE  PROPERTIES  – LOCATION KOLKATA / DIGHA / MANDERMONI / PURI  / JAIPUR 


          </p>
        </div>

        <div duration={500} smooth className=' flex items-center justify-center bg-orange-500 group text-white  w-fit px-6 py-3 my-2  rounded-md hover:cursor-pointer'>
            Explore
          </div>
         
      </div>
    </div>
  );
};

export default About;