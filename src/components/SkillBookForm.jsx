import React from 'react';
import toast from 'react-hot-toast';

const SkillBookForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    toast.success('Session booked successfully!');
  };
  return (
    <div className='bg-[#f8f6f6] py-10'>
      <div className='w-11/12 mx-auto border bg-white border-gray-300 rounded-md p-7 flex flex-col gap-4 md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-1/2'>
          <h3 className='text-4xl text-gray-900 font-semibold'>Start Your Skill Learning Journey</h3>
          <p className='text-xl mt-2'>Reserve a spot and learn directly from the provider</p>
        </div>
        <div className="card bg-base-100 w-full md:w-1/2 border border-gray-300 max-w-sm shrink-0 ">
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handleSubmit}>
                <label className="label mb-1.5">Name</label>
                <input type="text" required className="input w-full mb-3" placeholder="Enter Your Name" />
                <label className="label mb-1.5">Email</label>
                <input type="email" required className="input w-full" placeholder="Enter Your Email" />
                <button type='submit' className="btn w-full block shadow-none btn-neutral bg-blue-700 border-0 mt-5 rounded-sm">Submit</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBookForm;