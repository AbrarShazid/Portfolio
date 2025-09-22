import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo, FiX } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

// Images
import oneRoof1 from "../assets/OneRoof/1.webp"
import oneRoof2 from "../assets/OneRoof/2.webp"
import oneRoof3 from "../assets/OneRoof/3.webp"
import oneRoof4 from "../assets/OneRoof/4.webp"
import oneRoof5 from "../assets/OneRoof/5.webp"
import oneRoof6 from "../assets/OneRoof/6.webp"
import oneRoof7 from "../assets/OneRoof/7.webp"

import roommate1 from "../assets/RoommateFinder/roommate_1.png";
import roommate2 from "../assets/RoommateFinder/roommate_2.png";
import roommate3 from "../assets/RoommateFinder/roommate_3.png";
import roommate4 from "../assets/RoommateFinder/roommate_4.png";
import roommate5 from "../assets/RoommateFinder/roommate_5.png";
import roommate6 from "../assets/RoommateFinder/roommate_6.png";
import roommate7 from "../assets/RoommateFinder/roommate_7.png";

import food1 from "../assets/DonateFood/food1.webp";
import food3 from "../assets/DonateFood/food3.webp";
import food2 from "../assets/DonateFood/food2.webp";
import food4 from "../assets/DonateFood/food4.webp";
import food5 from "../assets/DonateFood/food5.webp";
import food6 from "../assets/DonateFood/food6.webp";
import food7 from "../assets/DonateFood/food7.webp";
import food8 from "../assets/DonateFood/food8.webp";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "One Roof",
      description: "One Roof is a full-featured apartment rental platform that streamlines the experience for users, members, and admins.",
      features: [
        "Apartment Filter by Rent Range",
        "Role-Based Dashboards for Admin, Member, and User",
        "Secure Online Payments with Coupon Support"
      ],
      challenges: "I faced the challenge of implementing payment gateway and protecting the dashboard role wise. It required a solid understanding of authorization and proper configuration, but I overcame it through documentation and testing.",

      futureImp: "Future enhancements could include integrating live chat option and advance filter option",


      images: [oneRoof1, oneRoof2, oneRoof3,oneRoof4,oneRoof5,oneRoof6,oneRoof7],
      tech: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> }
      ],
      links: {
        live: "https://one-roof-a12.vercel.app",
        github: "https://github.com/AbrarShazid/One-Roof-A12",
       
      }
    },
    {
      title: "Roommate Finder",
      description: "A platform to help students find compatible roommates based on preferences and lifestyle.",
      features: [
        "Interactive Dashboard",
        "Sort listings by rent or filter by room type",
        "Add, update, view, and delete roommate listings"
      ],
      challenges: "I faced challenges implementing the dashboard and managing large, complex forms efficiently. It required careful state handling and UI structuring.",

      futureImp: "Future improvements could include adding JWT authentication, a chat feature between the person posting and the one searching for a roommate, and a booking system for reserving rooms.",



      images: [roommate1, roommate2, roommate3, roommate4, roommate5, roommate6, roommate7],
      tech: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> }
      ],
      links: {
        live: "https://roommate-finder-a10.vercel.app/",
        github: "https://github.com/AbrarShazid/Roommate-Finder-A10",
   
      }
    },
    {
      title: "Share Bite",
      description: "ShareBite is a full-stack web platform for food sharing and surplus reduction. It enables individuals and organizations to donate excess food to those in need.",
      features: [
        "Real-time donation tracking",
        "Sorting by expire date",
        "Donation/Request history"
      ],
      challenges: "One of the main challenges I faced in this project was implementing JWT authentication. However, by thoroughly studying documentation and experimenting with various solutions, I was able to successfully overcome it.",

      futureImp: "Future improvements could include integrating a dashboard for better user management and adding a real-time chat feature between donors and recipients to enhance communication.",




      images: [food1, food2, food3, food4, food5, food6, food7, food8],
      tech: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> }
      ],
      links: {
        live: "https://share-bite-a11.vercel.app/",
        github: "https://github.com/AbrarShazid/Share-Bite-A11",
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-4 bg-gray-50 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onDetailsClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {/* DaisyUI Modal */}

      {selectedProject && (
        <dialog id="project_modal" className="modal modal-open" onClick={() => setSelectedProject(null)}>
          <div className="modal-box max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-800">
                <FiX className="text-xl" />
              </button>
            </div>

            <p className="mb-2 text-sm text-gray-600">{selectedProject.description}</p>

            <ul className="list-disc list-inside text-sm mb-3 text-gray-700">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="mb-4">
              <h4 className="font-semibold text-sm text-gray-800">Challenges:</h4>
              <p className="text-sm text-gray-700">{selectedProject.challenges}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-sm text-gray-800">Future Improvements:</h4>
              <p className="text-sm text-gray-700">{selectedProject.futureImp}</p>
            </div>
            
          

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, idx) => (
                <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a href={selectedProject.links.live} target="_blank" rel="noreferrer" className="btn bg-[#3c3c3d] text-white">
                <FiExternalLink /> Live
              </a>
              <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-neutral">
                <FiGithub /> Code
              </a>
            </div>
          </div>
        </dialog>
      )}










    </section>
  );
};

const ProjectCard = ({ project, onDetailsClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${project.title} screenshot`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-black">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{project.description}</p>
          <ul className="list-disc text-sm text-gray-600 list-inside mb-3">
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between text-sm">
            <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-sm bg-[#3c3c3d] text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1">
              <FiExternalLink /> Live
            </a>
            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 flex items-center gap-1">
              <FiGithub /> Code
            </a>
            <button onClick={onDetailsClick} className="btn-sm bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 flex items-center gap-1">
              <FiInfo /> Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
