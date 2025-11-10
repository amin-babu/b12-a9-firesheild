import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {

  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);
  const [open, setOpen] = useState(false);

  console.log(user);

  const handleUpdate = () => {
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setOpen(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='bg-[#f8f6f6] py-10'>
      <div className='w-11/12 max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8'>

        {/* Title */}
        <h2 className='text-3xl font-bold text-center mb-6 text-[#403F3F]'>My Profile</h2>

        {/* Profile Info */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 my-10 max-w-3xl mx-auto items-center'>
          {
            user?.photoURL ?
              <img
                src={user?.photoURL}
                alt="userInfo avatar"
                className='w-42 h-42 rounded-lg mb-4 border-2 border-gray-300 object-cover shadow-sm mx-auto md:mr-0 md:ml-auto'
              /> :
              <CgProfile className='w-42 h-42 rounded-full mb-4 border-2 border-gray-300 object-cover shadow-sm mx-auto md:mr-0 md:ml-auto'/>
          }
          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-semibold text-[#403F3F]'>{user?.displayName}</h3>
            <p className='text-gray-600 mt-1'>{user?.email}</p>

            {/* Update Button */}
            <button onClick={() => setOpen(true)} className='btn shadow-none flex items-center gap-2 rounded-sm text-sm p-4 mt-2 mx-auto md:mx-0 bg-[#099b83] text-white'>
              <FaEdit />Update Profile
            </button>
          </div>
        </div>

      </div>

      {/* modal */}
      {open && (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-11/12 max-w-md">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
              Update Profile
            </h3>

            {/* Name Input */}
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
              placeholder="Enter name"
            />

            <label className="block text-sm font-medium mb-1">Phot URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
              placeholder="Enter phot URL"
            />

            {/* Buttons */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 cursor-pointer bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button onClick={handleUpdate} className="px-4 py-2 bg-[#099b83] cursor-pointer text-white rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
