import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user?.photoURL);
  const profileImage = user?.photoURL;

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success('Your logged out successfull'))
      .catch(error => toast.error(error));
  };

  return (
    <div className="navbar px-0 bg-base-100 shadow-sm">
      <div className='flex items-center justify-between w-11/12 mx-auto'>
        <div className='flex items-center gap-0.5'>
          <div className="md:hidden flex z-50 dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 space-y-2 mt-3 w-52 p-2 shadow">
              <Link to='/' className={'text-xl btn text-gray-700 hover:text-gray-900'}>Home</Link>
              {
                user ?
                  <>
                    <Link onClick={handleLogOut} className={'text-xl text-gray-700 btn hover:text-gray-900'}>Logout</Link>
                    <Link to='/profile' className={'text-xl btn text-gray-700 hover:text-gray-900'}><CgProfile size={25} /> My Profile</Link>
                  </> :
                  <>
                    <Link to='/login' className={'text-xl btn text-gray-700 hover:text-gray-900'}>Login</Link>
                    <Link to='/signup' className={'text-xl btn text-gray-700 hover:text-gray-900'}>Signup</Link>
                  </>
              }
            </ul>
          </div>
          <Link>
            <img className='h-13' src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu lg:flex lg:items-center space-x-5 menu-horizontal px-1">
            <NavLink to='/' className={'text-xl text-gray-700 hover:text-gray-900'}>Home</NavLink>
            {
              user ?
                <>
                  <button onClick={handleLogOut} className={'text-xl cursor-pointer hover:underline text-gray-700 hover:text-gray-900'}>Logout</button>
                  {
                    profileImage ? (
                      <Link to="/profile" className="cursor-pointer relative group">
                        <img
                          className="h-10 w-10 object-cover border rounded-full"
                          src={profileImage}
                          alt=""
                        />

                        {/* Hover Name */}
                        <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                          {user?.displayName}
                        </span>
                      </Link>
                    ) : (
                      <Link to="/profile" className="cursor-pointer relative group">
                        <CgProfile className="h-8 w-8" />

                        {/* Hover Name */}
                        <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                          {user?.displayName}
                        </span>
                      </Link>
                    )
                  }
                </> :
                <>
                  <NavLink to='/login' className={'text-xl text-gray-700 hover:text-gray-900'}>Login</NavLink>
                  <NavLink to='/signup' className={'text-xl text-gray-700 hover:text-gray-900'}>Signup</NavLink>
                </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;