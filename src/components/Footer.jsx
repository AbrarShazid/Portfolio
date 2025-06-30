import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-[#3c3c3d] text-white rounded-t-2xl border-t border-gray-200 py-6">
      <div className="max-w-7xl ">
        {/* Left: Logo or Text */}
        <div className="text-lg font-semibold text-center">
          © {new Date().getFullYear()} Shazid. All rights reserved.
        </div>



      </div>
    </footer>
  );
};

export default Footer;
