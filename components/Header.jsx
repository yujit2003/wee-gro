"use client";
import React, { useState } from 'react';
import logo from "../image/logo192.png";
import Image from 'next/image';
import UseSideBar from "./UseSideBar";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-300 p-4 flex items-center justify-between relative">
      <Image
        src={logo}
        width={70}
        height={40}
        alt="Policy"
        className="object-contain"
      />
      <button
        className="text-gray-700 md:hidden block"
        type="button"
        aria-label="Toggle navigation"
        onClick={toggleDropdown}
      >
        {/* Hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6">
        <a className="text-lg font-medium pt-2 hover:text-blue-600" href="/">Home</a>
        <a className="text-lg font-medium pt-2 hover:text-blue-600" href="/bidding">Investment</a>
        <a className="text-lg font-medium pt-2 hover:text-blue-600" href="/govtpol">Government Policies</a>
        <a className="text-lg font-medium pt-2 hover:text-blue-600" href="/details">Startups Detail</a>
        <UseSideBar />
      </div>

      {/* Dropdown menu with glassmorphism */}
      {isDropdownOpen && (
        <div className=" z-50 absolute top-full left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg rounded-lg md:hidden p-4 shadow-lg">
          <a className="block px-4 py-2 text-lg font-medium text-gray-900 hover:text-blue-600" href="/">Home</a>
          <a className="block px-4 py-2 text-lg font-medium text-gray-900 hover:text-blue-600" href="/bidding">Investment</a>
          <a className="block px-4 py-2 text-lg font-medium text-gray-900 hover:text-blue-600" href="/govtpol">Government Policies</a>
          <a className="block px-4 py-2 text-lg font-medium text-gray-900 hover:text-blue-600" href="/details">Startups Detail</a>
          <div className="flex items-center justify-center"><UseSideBar /></div>
        </div>
      )}
    </nav>
  );
};

export default Header;
