import React, { use } from 'react';
import logo from '../assets/jobhub-logo.svg'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      alert("You logged out")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className="navbar bg-base-100 shadow-sm px-3 lg:px-12 py-4 ">
      {/* Left (Logo + Mobile Dropdown) */}
      <div className="navbar-start ">
        {/* Mobile dropdown menu */}
        <div className="dropdown lg:hidden md:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Find a Job</a></li>
            <li><a>Recruiters</a></li>
            <li><a>Candidates</a></li>
            <li><a>Pages</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to='/'>
          <a className="btn btn-ghost  text-xl">
            <img src={logo} alt="JobHub Logo" className="h-7 lg:h-8" />
          </a>
        </NavLink>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-base font-medium  ">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><a>Find a Job</a></li>
          <li><a>Recruiters</a></li>
          <li><a>Candidates</a></li>
          <li><a>Pages</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* Right (Buttons) */}
      <div className="navbar-end gap-2">

        <Link to="/auth/register" className="btn btn-outline border-[rgb(60,101,245)]  font-medium text-sm text-[rgb(60,101,245)]">Register</Link>
        {
          user ? <button onClick={handleLogout} to="/auth/login" className="btn bg-[rgb(60,101,245)] hover:bg-[rgb(60,101,245)] text-white text-sm px-6">Log Out</button> : <Link to="/auth/login" className="btn bg-[rgb(60,101,245)] hover:bg-[rgb(60,101,245)] text-white text-sm px-6">Log in</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;