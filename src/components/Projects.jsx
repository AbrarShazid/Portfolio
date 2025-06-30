
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

// Images
import snowPay1 from "../assets/Snowpay/snowPay-1.png";
import snowPay2 from "../assets/Snowpay/snowPay-2.png";
import snowPay3 from "../assets/Snowpay/snowPay-3.png";

import roommate1 from "../assets/RoommateFinder/roommate_1.png";
import roommate2 from "../assets/RoommateFinder/roommate_2.png";
import roommate3 from "../assets/RoommateFinder/roommate_3.png";
import roommate4 from "../assets/RoommateFinder/roommate_4.png";
import roommate5 from "../assets/RoommateFinder/roommate_5.png";
import roommate6 from "../assets/RoommateFinder/roommate_6.png";
import roommate7 from "../assets/RoommateFinder/roommate_7.png";

import food1 from "../assets/DonateFood/food1.png";
import food2 from "../assets/DonateFood/food2.png";
import food3 from "../assets/DonateFood/food3.png";
import food4 from "../assets/DonateFood/food4.png";
import food5 from "../assets/DonateFood/food5.png";
import food6 from "../assets/DonateFood/food6.png";
import food7 from "../assets/DonateFood/food7.png";
import food8 from "../assets/DonateFood/food8.png";

const Projects = () => {
  const projects = [
    {
      title: "SnowPay",
      description: "A payment processing platform which allows users to track, manage, and pay utility bills effortlessly",
      features: [
        "Pay bills and update balance in real-time",
        "Bill payment history",
        "Fully responsive UI"
      ],
      images: [snowPay1, snowPay2, snowPay3],
      tech: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      links: {
        live: "https://snow-pay-a09.vercel.app/",
        github: "https://github.com/AbrarShazid/SnowPay-A09",
        details: "/projects/snowpay"
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
      images: [roommate1, roommate2, roommate3, roommate4, roommate5, roommate6, roommate7],
      tech: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> }
      ],
      links: {
        live: "https://roommatefinder.example.com",
        github: "https://github.com/yourusername/roommate-finder",
        details: "/projects/roommate-finder"
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
      images: [food1, food2, food3, food4, food5, food6, food7, food8],
      tech: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> }
      ],
      links: {
        live: "https://share-bite-a11.vercel.app/",
        github: "https://github.com/AbrarShazid/Share-Bite-A11",
        details: "/projects/donate-food"
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-20 bg-gray-50 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image Carousel */}
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

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>

        <ul className="list-disc text-sm text-gray-600 list-inside mb-3">
          {project.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs">
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>

        <div className="flex justify-between text-sm">
          <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1">
            <FiExternalLink /> Live
          </a>
          <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 flex items-center gap-1">
            <FiGithub /> Code
          </a>
          <a href={project.links.details} className="btn-sm bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 flex items-center gap-1">
            <FiInfo /> Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
