import React from 'react';
import { useLoaderData } from 'react-router';
import ProviderCard from './ProviderCard';

const TopRatedProviders = () => {
  const {providers} = useLoaderData();
  return (
    <div className='bg-[#1D2939] p-4 md:p-8 rounded-md mb-10'>
      <h2 className='text-center text-white text-4xl font-bold'>Top Rated Skill Providers</h2>
      <p className='text-center md:w-7/12 mx-auto my-4 text-gray-300 text-xl font-normal'>Meet our most trusted and highly rated experts, ready to help you learn and grow with their unique skills.</p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {
        providers.map((provider, index) => {
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProviderCard provider={provider}/>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default TopRatedProviders;