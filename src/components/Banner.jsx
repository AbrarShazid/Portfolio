import React from 'react';
import bannerImg from "../assets/Black & White.jpg";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Banner = () => {
  return (
    <div id='home' className="min-h-screen flex items-center justify-center bg-[#3c3c3d] px-[5%] py-2  rounded-b-3xl ">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  z-10">
        {/* Left Content */}
        <div className="space-y-4 text-center lg:text-left">
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl  font-bold tracking-tight text-white font-primary ">
              Hello, I'm <span className="text-gray-300">Abrar Shazid</span>
            </h1>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-xl sm:text-2xl  font-semibold text-gray-300 font-primary ">
              Web Developer
            </h2>
          </div>

          <div className="overflow-hidden">
            <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 font-primary">
              Building sleek, responsive websites that deliver real results.
            </p>
          </div>
          <div className="flex gap-5 justify-center lg:justify-start my-5">

            <a href="https://github.com/abrarshazid/" target='_blank' className="border border-white p-0.5  rounded-full  transition">
              <FaGithub className="text-white text-3xl hover:scale-125 transition  delay-300" />
            </a>
            <a href="https://www.linkedin.com/in/abrar-shazid/" target='_blank' className="border border-white p-0.5  rounded-full  transition">
              <TiSocialLinkedin className="text-[#3c3c3d] text-3xl hover:scale-125 transition  delay-300 rounded-full bg-white " />
            </a>
            <a href="https://web.facebook.com/AbrarShazid.BD" target='_blank' className="border border-white p-0.5  rounded-full  transition ">
              <FaFacebook className="text-white text-3xl hover:scale-125  transition  delay-300" />
            </a>
          </div>

          <div className="flex flex-col items-center  sm:flex-row gap-4 justify-center lg:justify-start ">
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-[#3c3c3d] font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center gap-2 font-primary w-max">
              <IoCloudDownloadOutline className='h-5 w-5' />
              Download Resume
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className=" hidden  lg:flex  lg:justify-end ">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">

            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-white/10 to-white/30 blur-md"></div>
            <img
              src={bannerImg}
              alt="Abrar Shazid"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;