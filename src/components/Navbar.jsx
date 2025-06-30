import React from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div  className='bg-[#3c3c3d] h-[12vh] pt-4 md:pt-0 md:h-auto text-white md:flex md:justify-between md:items-center px-[5%] sticky z-60 top-0 shadow-sm '>


      <div className='hidden md:block'>
        <img src={logo} alt="" className='w-20 h-20 rounded-lg' />
      </div>

      <div className='flex gap-6 '>
<Link
  to="home"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  exact="true"
  activeClass="text-green-400 font-semibold"
  className="cursor-pointer transition-colors duration-300"
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
  className="cursor-pointer transition-colors duration-300"
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
  className="cursor-pointer transition-colors duration-300"
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
  className="cursor-pointer transition-colors duration-300"
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
  className="cursor-pointer transition-colors duration-300"
>
     Contact
</Link>

       



      </div>



    </div>
  );
};

export default Navbar;