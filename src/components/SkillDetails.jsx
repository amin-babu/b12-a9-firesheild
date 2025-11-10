import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
import ratingIcon from '../assets/icon-ratings.png'
import categoryIcon from '../assets/category.png'
import slotIcon from '../assets/slot.webp'
import profileIcon from '../assets/profileicon.png'
import mailIcon from '../assets/mail-icon.jpg'

const SkillDetails = ({ skillsData }) => {
  const { id } = useParams();
  const [skillInfo, setSkillInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const skill = skillsData.find(skillDetails => skillDetails.id === id);
    setSkillInfo(skill);
  }, [skillsData, id]);

  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    more_description,
    image,
    category
  } = skillInfo;

  return (
    <div className='bg-[#f8f6f6] pt-10 pb-2'>
      <div className='w-11/12 mx-auto'>
        <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-6 p-3 md:p-5 border bg-white border-gray-300 rounded-md'>
          <img src={image} className='w-full md:h-[360px] object-cover border border-gray-300 rounded-md' alt="" />
          <div className=''>
            <p className='text-4xl font-bold text-gray-800'>{skillName}</p>
            <div className='flex gap-3.5 flex-wrap my-4'>
              <div className="badge py-5 px-4 rounded-sm bg-[#FFF0E1] text-[#FF8811] border cursor-pointer border-[#FF8811]/40 badge-soft badge-warning font-medium">
                <img className='w-6' src={ratingIcon} alt="" />
                <span className='text-xl'>{rating}</span>
              </div>
              <div className="badge py-5 px-4 rounded-sm bg-[#e3d2ff] text-[#4728e0] badge-soft cursor-pointer border border-[#4728e0]/40 badge-warning font-medium">
                <img className='w-6' src={categoryIcon} alt="" />
                <span className='text-xl'>{category}</span>
              </div>
              <div className="badge py-5 cursor-pointer px-4 text-lg rounded-sm bg-[#C6F6D5] text-[#0a7100] border border-[#046C4E]/40 font-medium">
                <img className="w-6" src={slotIcon} alt="" />
                <span className="text-xl">Slots: {slotsAvailable}</span>
              </div>
            </div>
            <p className='text-lg text-gray-600'>{more_description}</p>
            <div className='flex items-center gap-14'>
              <div>
                <p className='flex gap-2.5 mt-4 mb-2 items-center'>
                  <img className='w-6 h-6' src={profileIcon} alt="" />
                  <span className='text-[16px] font-medium text-gray-700'>{providerName}</span>
                </p>
                <p className='flex gap-2.5 items-center'>
                  <img className='w-6 h-6' src={mailIcon} alt="" />
                  <span className='text-[16px] font-medium text-gray-700'>{providerEmail}</span>
                </p>
              </div>
              <p className='text-gray-700 text-xl font-semibold'>Price: {price}$</p>
            </div>
            <button onClick={() => navigate(-1)} className="btn shadow-none flex items-center gap-2 rounded-none text-[16px] px-5 mt-4 py-5 bg-[#e80b28] text-white">
              <FaArrowLeft />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;