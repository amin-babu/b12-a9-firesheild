import React from 'react';
import categoryIcon from '../assets/category.png'
import facebook from '../assets/Facebook.png'
import twitter from '../assets/Twitter.png'
import isntagram from '../assets/Instagram.png'

const ProviderCard = ({ provider }) => {
  const { name, category, expertise, bio, image } = provider;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className='p-4'>
        <img
          className='rounded-md h-[300px] border border-gray-300 w-full object-cover'
          src={image}
          alt='' />
      </figure>
      <div className="card-body gap-0 p-4 pt-0">
        <div className='flex items-center justify-between'>
          <div className='grow-0'>
            <h2 className="card-titl grow-0 text-2xl font-semibold">{name}</h2>
            <p className='text-gray-600'>{expertise}</p>
          </div>
          <div className="badge py-3 px-2 rounded-sm bg-[#e3d2ff] text-[#4728e0] badge-soft badge-warning">
            <img className='w-4' src={categoryIcon} alt="" /> {category}
          </div>
        </div>
        <p className='text-[16px] mt-2 mb-3 text-gray-700'>{bio}</p>
        <div className='flex gap-3'>
          <a target='_blank' href="https://facebook.com">
            <img className='border border-gray-300 rounded-full' src={facebook} alt="" />
          </a>
          <a target='_blank' href="https://x.com">
            <img className='border border-gray-300 rounded-full' src={twitter} alt="" />
          </a>
          <a target='_blank' href="https://instagram.com">
            <img className='border border-gray-300 rounded-full' src={isntagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;