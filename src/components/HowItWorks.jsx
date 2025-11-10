import React, { useEffect } from 'react';
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const HowItWorks = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className='bg-[#FFEEE6] py-10'>
      <div className='w-11/12 mx-auto'>
        <h2 className='text-center w-full text-gray-800 text-4xl font-bold'>HOW IT WORKS</h2>
        <p className='text-center my-4 text-gray-600 text-xl font-normal'>Just 3 simple steps to get your job done</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <div data-aos="fade-up"  data-aos-delay="100" className="card cursor-pointer bg-white border border-gray-300 py-6 px-3 text-center rounded-lg">
            <div className="flex justify-center">
              <div className="bg-[#AD5C2C] w-14 h-14 rounded-full flex items-center justify-center shadow">
                <FaUserPlus className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-lg mt-2 font-bold text-[#AD5C2C]">STEP 01</h3>
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p className="text-gray-600 text-[16px]">
              Sign up and set up your profile in no time.
            </p>
          </div>


          <div data-aos="fade-up"  data-aos-delay="200" className="card cursor-pointer bg-white border border-gray-300 py-6 px-3 text-center rounded-lg">
            <div className="flex justify-center">
              <div className="bg-[#AD5C2C] w-14 h-14 rounded-full flex items-center justify-center shadow">
                <FaSearch className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-lg mt-2 font-bold text-[#AD5C2C]">STEP 02</h3>
            <h2 className="text-2xl font-semibold">Find Provider</h2>
            <p className="text-gray-600 text-[16px]">
              Select the right person for your needs quickly and easily.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="card cursor-pointer bg-white border border-gray-300 py-6 px-3 text-center rounded-lg">
            <div className="flex justify-center">
              <div className="bg-[#AD5C2C] w-14 h-14 rounded-full flex items-center justify-center shadow">
                <FaHandshake className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-lg mt-2 font-bold text-[#AD5C2C]">STEP 03</h3>
            <h2 className="text-2xl font-semibold">Hire & Get Work Done</h2>
            <p className="text-gray-600 text-[16px]">
              Hire your provider and complete your job hassle-free.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HowItWorks;