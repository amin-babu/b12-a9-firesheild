import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// This is 1 more extra section in the homepage

const NumberStats = () => {

  useEffect(() => {
      AOS.init({
        duration: 800,
        once: true
      });
    }, []);
  
  return (
    <div className="bg-base-200 border rounded-sm border-gray-200 my-16 p-4 md:p-12">
      <h2 className="text-center font-semibold text-3xl">Trusted by a Growing Local Community</h2>
      <p className='text-center pt-3 pb-6'>People are learning, sharing, and growing together on SkillSwap — one skill at a time.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
        <div data-aos="fade-up"  data-aos-delay="100" className="bg-white py-10 rounded-xl shadow-sm cursor-pointer">
          <h5 className="text-3xl font-semibold mb-1 text-[#AD5C2C]">500+</h5>
          <p className="font-normal">Learners</p>
        </div>
        <div data-aos="fade-up"  data-aos-delay="200" className="bg-white py-10 rounded-xl shadow-sm cursor-pointer">
          <h5 className="text-3xl font-semibold mb-1 text-[#AD5C2C]">200+</h5>
          <p className="font-normal">Swaps</p>
        </div>
        <div data-aos="fade-up"  data-aos-delay="300" className="bg-white py-10 rounded-xl shadow-sm cursor-pointer">
          <h5 className="text-3xl font-semibold mb-1 text-[#AD5C2C]">4.8 ★</h5>
          <p className="font-normal">Avg Rating</p>
        </div>
        <div data-aos="fade-up"  data-aos-delay="400" className="bg-white py-10 rounded-xl shadow-sm cursor-pointer">
          <h5 className="text-3xl font-semibold mb-1 text-[#AD5C2C]">120+</h5>
          <p className="font-normal">Providers</p>
        </div>
      </div>
    </div>
  );
};

export default NumberStats;