
import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt
} from "react-icons/fa";
import {
  RiTailwindCssFill, RiFirebaseFill
} from "react-icons/ri";
import {
  SiExpress, SiMongodb, SiJsonwebtokens
} from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { motion } from "motion/react"

const Skills = () => {
  const skills = [
    "JavaScript", "React", "Tailwind CSS", "HTML5", "CSS3",
    "Express.js", "MongoDB", "Firebase", "JWT", "Git",
    "Framer Motion", "C", "C++"
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "React", "Tailwind CSS", "HTML5", "CSS3"],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Express.js", "MongoDB", "Firebase", "JWT"],
      icon: "⚙️"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Framer Motion", "C", "C++"],
      icon: "🛠️"
    }
  ];

  const getSkillIcon = (skill) => {
    const icons = {
      "JavaScript": <FaJsSquare className='text-yellow-400' />,
      "React": <FaReact className='text-blue-400' />,
      "Tailwind CSS": <RiTailwindCssFill className='text-cyan-500' />,
      "HTML5": <FaHtml5 className='text-orange-500' />,
      "CSS3": <FaCss3Alt className='text-blue-500' />,
      "Express.js": <SiExpress className='text-gray-700' />,
      "MongoDB": <SiMongodb className='text-green-500' />,
      "Firebase": <RiFirebaseFill className='text-yellow-500' />,
      "JWT": <SiJsonwebtokens className='text-pink-500' />,
      "Git": <FaGitAlt className='text-orange-400' />,
      "Framer Motion": <FiFramer className='text-pink-400' />,
      "C": <span className="text-gray-700 font-semibold text-sm"></span>,
      "C++": <span className="text-gray-700 font-semibold text-sm"></span>,
    };
    return icons[skill] || "•";
  };

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 bg-gray-50 text-gray-900 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Technical Skills</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Technologies I work with regularly across frontend and backend.
          </p>
        </div>

        {/* Marquee */}
        <div className="mb-16 overflow-hidden">
          <Marquee speed={40} gradient={false} pauseOnHover className='h-16 '>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-5 rounded-full shadow-md transition duration-300 mx-2"
              >
                <span>{getSkillIcon(skill)}</span>
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, ease: "backInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-fit mx-auto bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          
              key={index}
              
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm py-1.5 px-3 rounded-full text-gray-700 hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
        
          </motion.div>














          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
