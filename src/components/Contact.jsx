import React, { useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
   const form = useRef();



    const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zpkn4at', 'template_k1jaqwn', form.current, {
        publicKey:'97-dP6JlDXLJhFjBZ',
      })
      .then(
        () => {
          toast.success("Message sent!");
          form.current.reset();
        },
        (error) => {
         toast.error("Failed to send message.");
          
        },
      );
  };
  return (
    <div id="contact" className='min-h-screen bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-24'>
      {/* Section Header */}
      <div className='max-w-7xl mx-auto mb-12'>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#3c3c3d] mb-4'>
          Get In Touch
        </h1>
        <div className="flex items-center w-full">
          <div className="w-16 h-2 bg-[#3c3c3d] "></div>
          <div className="w-32 h-px bg-[#3c3c3d] -ml-12"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left Side - Contact Info */}
        <div className='space-y-8'>
          <div className='bg-white p-8 rounded-xl shadow-lg'>
            <h3 className='text-2xl font-semibold text-[#3c3c3d] mb-6'>Contact Information</h3>
            
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-[#3c3c3d] p-3 rounded-full mr-4'>
                  <FaLocationDot className="h-6 w-6 text-white"  />
                
                </div>
                <div>
                  <h4 className='text-lg font-medium text-gray-500'>Location</h4>
                  <p className='text-xl text-[#3c3c3d]'>Dhaka-1620, Bangladesh</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-[#3c3c3d] p-3 rounded-full mr-4'>

                  
<MdEmail className="h-6 w-6 text-white" />
                
                </div>
                <div>
                  <h4 className='text-lg font-medium text-gray-500'>Email</h4>
                  <p className='text-xl text-[#3c3c3d]'>abraragmain75@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-[#3c3c3d] p-3 rounded-full mr-4'>

                  <FaWhatsapp className="h-6 w-6 text-white" />
              
                </div>
                <div>
                  <h4 className='text-lg font-medium text-gray-500'>Whatsapp</h4>
                  <p className='text-xl text-[#3c3c3d]'>+880 1904 382308</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className='bg-white p-8 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-semibold text-[#3c3c3d] mb-6'>Send Me a Message</h3>
          
          <form ref={form} onSubmit={sendMail} className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-lg font-medium text-gray-700 mb-2'>Your Name</label>
              <input 
                type="text" 
                id="name" 
                name='name'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c3c3d]  transition outline-0 placeholder-gray-600'
                placeholder='Enter your name here'
                required
              />
            </div>

            <div>
              <label htmlFor="email" className='block text-lg font-medium text-gray-700 mb-2'>Your Email</label>
              <input 
                type="email" 
                id="email" 
                name='email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c3c3d] transition outline-0 placeholder-gray-600'
                placeholder='Enter your email here'
                required
              />
            </div>

            <div>
              <label htmlFor="message" className='block text-lg font-medium text-gray-700 mb-2'>Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3c3c3d] transition outline-0 placeholder-gray-600'
                name='message'
                placeholder='Enter your message here'
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className='w-full bg-[#3c3c3d] text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-[#2a2a2b] transition duration-300 transform hover:scale-[1.02] shadow-md'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;