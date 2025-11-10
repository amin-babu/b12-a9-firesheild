import React from 'react';
import SkillDetails from '../components/SkillDetails';
import { useLoaderData } from 'react-router';
import SkillBookForm from '../components/SkillBookForm';

const SkillDetailsPage = () => {
  const skillsData = useLoaderData();
  return (
    <div>
      <SkillDetails skillsData={skillsData}/>
      <SkillBookForm/>
    </div>
  );
};

export default SkillDetailsPage;