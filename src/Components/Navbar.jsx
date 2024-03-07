import React, { useState } from 'react';
import logo from '../assets/koinx.svg';

export default function Navbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log("workinf")
  };


  return (
    <nav className="bg-white font-inter p-3 border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        <a className="flex items-center text-white" href="#">
          <img src={logo} alt="Logo" className="mr-2 h-5" />
          KoinX
        </a>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-black font-semibold text-xs">Crypto Taxes</a>
          <a href="#" className="text-black font-semibold text-xs">Free Tools</a>
          <a href="#" className="text-black font-semibold text-xs">Resource Center</a>
          <a href="https://github.com/nkrider7" className="text-white font-normal text-xs  bg-[#0052fe] py-2 px-4 rounded-md ">Get Started</a>
        </div>
        <button className="lg:hidden text-black" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col py-4 gap-y-4 mt-4">
          <a href="#" className="text-black font-semibold text-xs">Crypto Taxes</a>
          <a href="#" className="text-black font-semibold text-xs">Free Tools</a>
          <a href="#" className="text-black font-semibold text-xs">Resource Center</a>
        </div>
      )}
    </nav>
  );
}
