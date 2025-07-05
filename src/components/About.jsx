import React from 'react';
import aboutImg from "../assets/white.jpg";
import { motion } from "motion/react"
import { Link } from 'react-scroll';

const About = () => {

  const handleScroll=()=>{
    const section = document.getElementById("skills");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <div id='about' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen bg-gray-50 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Image Section */}
        <div className="relative group w-full max-w-md mx-auto lg:mx-0">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-fit mx-auto"
          >

            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#3c3c3d]/30 to-transparent blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 hover:shadow-5xl"></div>
            <img
              src={aboutImg}
              alt="About Me"
              className="relative z-10 w-full h-auto rounded-2xl border-2 border-[#3c3c3d]/50 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-900  font-primary">
              About Me
            </h1>
            <div className="flex items-center w-full">
              <hr className="w-[7%] border-t-6 border-[#3c3c3d]" />
              <hr className=" border-t border-[#3c3c3d] w-[20%]" />
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <p className="text-gray-700  leading-relaxed">
              I’m Abrar Shazid, a passionate web developer with a strong foundation in full-stack development and a curiosity that constantly pushes me to learn more. I’ve solved over <span className=" font-semibold">500+ coding problems</span> across various platforms — sharpening my problem-solving skills and deepening my understanding of core computer science principles.
            </p>

            <p className="text-gray-700  leading-relaxed mt-4">
              Currently studying Computer Science and Engineering, I'm always exploring new technologies and building things that push my understanding further.
            </p>
          </div>


          <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                   
                    className="cursor-pointer             px-6 py-3 bg-[#3c3c3d] hover:bg-[#2e2e2f] text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                     View My Skills
                  </Link>
        </div>
      </div>
    </div>
  );
};

export default About;