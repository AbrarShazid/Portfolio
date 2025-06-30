import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-[#3c3c3d] text-white sticky top-0 z-50 shadow-sm'>
     
      <div className='md:flex md:justify-between md:items-center px-[5%]'>
 
        <div className='flex justify-between items-center py-3 md:py-0'>
          <img 
            src={logo} 
            alt="" 
            className='w-20 h-20 rounded-lg' 
          />
          
          
          <button 
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        
        <div className={`hidden md:flex gap-6 items-center`}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            activeClass="text-green-400 font-semibold"
            className="cursor-pointer transition-colors duration-300 "
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="text-green-400 font-semibold"
            className="cursor-pointer transition-colors duration-300 "
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="text-green-400 font-semibold"
            className="cursor-pointer transition-colors duration-300 "
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="text-green-400 font-semibold"
            className="cursor-pointer transition-colors duration-300 "
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="text-green-400 font-semibold"
            className="cursor-pointer transition-colors duration-300 "
          >
            Contact
          </Link>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className='md:hidden bg-[#3c3c3d] px-[5%] pb-4 space-y-3'>
          <MobileNavLink to="home" label="Home" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="about" label="About" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="skills" label="Skills" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
};


const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    exact="true"
    activeClass="text-green-400 font-semibold"
    className="block py-2 cursor-pointer transition-colors duration-300 hover:text-green-400"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;