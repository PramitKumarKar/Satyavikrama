import React from "react";

const About = () => {
  return (
    <div
      name="Team"
      className="w-full h-screen  text-orange-500  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Our Associated Professionals Team
          </p>
          <p className="text-2xl font-semibold mt-4">
            Our team consists of experienced and specialised individuals from different fields of the industry.
          </p>
          <p className="text-xl mt-4 font-semibold">
          1.	Mr. Tariang Massar – Director Massar Cements Pvt. Ltd.  <br />
          2.	Mr. Vipin Dwivedi – IT Functional -SAP & ERP Consultant <br />
          3.	Mr. Sidharth Biswas – Project Civil Consultant <br />
          4.	Mr. Tapan Kumar Roy – Director Project – Cement Plant & Power Plant  <br />
          5.	Mr. Prasenjit Sikder – IT Technical Consultant – SAP  <br />
          6.	Mr. Niladri Ray Chaudhury –  IT Technical Consultant  <br />
          7.	Mr. Malay Kumar Ghosh – Consultant Electrical & Instrumentation Consultant <br />
          8.	Mr. Samaresh Dutta – Consultant Electrical & Instrumentation Consultant. <br />
          9.	Mr. T. K. Sarkar – Financial Consultant <br />
          10.	Mr. Vikram Sharma – Chartered Accountant <br />
          11.	Mr. Virendra Singh Sekhawat – Hotel Management Consultant <br />
          12.	Mr. Indranil Sarkar – Supreme / High Court Legal Consultant <br />
          13.	Mr. John Bosco Anthony – Consultant Materials Management <br />
          14.	Dr. Neela Dutta Gupta - Online Meeting by What’s App Video or Audio Call  / Zoom Meeting /  Google Meet. <br />

          </p>
        </div>

        <div duration={500} smooth className=' flex items-center justify-center bg-orange-500 group text-white  w-fit px-6 py-3 my-2  rounded-md hover:cursor-pointer'>
            Know More
          </div>
         
      </div>
    </div>
  );
};

export default About;