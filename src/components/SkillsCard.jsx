import React from 'react';
import ratingIcon from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const SkillsCard = ({ skill }) => {
  const { image, skillName, rating, price, description, id } = skill;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className='p-4'>
        <img
          className='rounded-md h-[200px] w-full object-cover'
          src={image}
          alt={skillName} />
      </figure>
      <div className="card-body p-4 pt-0 flex flex-col">
        <h2 className="card-title text-2xl">{skillName}</h2>
        <p className='text-[16px] text-gray-600 my-1 flex-1'>{description}</p>
        <div className='flex items-center justify-between'>
          <div className="badge py-3 px-2 rounded-sm bg-[#FFF0E1] text-[#FF8811] badge-soft badge-warning">
            <img className='w-4' src={ratingIcon} alt="" /> {rating}
          </div>
          <div className="badge py-3 px-2 rounded-sm bg-[#d6f1c1] text-[#038507] badge-soft font-medium badge-warning">
            Price - {price}$
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/skills-details/${id}`} className="btn shadow-none w-full text-white bg-[#037965]">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;