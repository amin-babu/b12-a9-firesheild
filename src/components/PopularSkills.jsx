import React from 'react';
import { useLoaderData } from 'react-router';
import SkillsCard from './SkillsCard';

const PopularSkills = () => {
  const { skills } = useLoaderData();
  return (
    <div className='bg-base-200 border border-gray-200 p-4 md:p-8 rounded-md mb-10'>
      <h2 className='text-center text-gray-800 text-4xl font-bold'>Popular Skills</h2>
      <p className='text-center my-4 text-gray-600 text-xl font-normal'>Learn from the best in your community</p>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {
          skills.map((skill, index) => (
            <div
              key={skill.skillId}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <SkillsCard skill={skill} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PopularSkills;