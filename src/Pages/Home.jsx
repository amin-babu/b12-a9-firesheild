import React from 'react';
import HeroSlider from '../components/HeroSlider';
import PopularSkills from '../components/PopularSkills';
import TopRatedProviders from '../components/TopRatedProviders';
import HowItWorks from '../components/HowItWorks';
import NumberStats from '../components/NumberStats';

const Home = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto'>
        <HeroSlider />
      </div>
      <div className='w-11/12 mx-auto'>
        <PopularSkills />
      </div>
      <div className='w-11/12 mx-auto'>
        <TopRatedProviders />
      </div>
      {/* This is 1 more extra section in the homepage */}
      <div className='w-11/12 mx-auto'>
        <NumberStats />
      </div>
      <div>
        <HowItWorks />
      </div>
    </div>
  );
};

export default Home;