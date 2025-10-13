

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, LogIn } from 'lucide-react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import PrimaryButton from '../common/PrimaryButton';
import logo from '../../public/logo.png'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/why-resolaring', label: 'Why Resolaring?' },
    { to: '/recycling-process', label: 'The Recycling Process' },
    { to: '/marketplace', label: 'Marketplace' },
    { to: '/gallery', label: 'Shared Gallery' },

  ];

  return (
    <header className="w-full bg-white">
      <div className="2xl:max-w-9/12 max-w-11/12 mx-auto py-6 flex justify-between  items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start space-y-2">

          <div className='flex items-center gap-2'>
            <img src={logo} alt="Resolaring Logo" className="h-10 w-auto" />
            <span className="text-4xl font-semibold text-gray-900">Resolaring</span>
          </div>
          <p className="text-[11px] text-gray-500 leading-none">Recycling and installing panels for a better future</p>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-between  items-center space-x-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`
              }
            >
              {link.label}
            </NavLink>
          ))}


          <PrimaryButton to="/become-seller" icon={FaArrowRightLong}>
            Become a Seller
          </PrimaryButton>

          <Link
            to="/login"
            className="flex items-center border border-gray-300 px-3 gap-2 py-3 rounded-full text-sm hover:bg-gray-100 transition"
          >
            Login
            <CgProfile
              size={20} />
          </Link>

          <NavLink
            key={'/book'}
            to={'/book'}
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}`
            }
          >
            Book Online
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-black"
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/become-seller"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-yellow-400 text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition text-center"
            >
              Become a Seller →
            </Link>

            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center border border-gray-300 px-3 py-2 rounded-full text-sm hover:bg-gray-100 transition"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
