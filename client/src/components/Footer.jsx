// src/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold">ArtGen-1.0</h1>
            <p className="mt-3 max-w-lg text-sm text-gray-400">
            ArtGen-1.0 is An language model designed to assist with various tasks and provide helpful responses to user queries.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold ">Links</h2>
              <ul className="mt-2 space-y-3 text-[0.75rem]">
                <li><a href="#home" className="hover:underline uppercase">Home</a></li>
                <li><a href="#about" className="hover:underline uppercase">About</a></li>
                <li><a href="#services" className="hover:underline uppercase">Services</a></li>
                <li><a href="#contact" className="hover:underline uppercase">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Follow Us</h2>
              <div className="mt-2 flex space-x-4">
                <a href="#facebook" className="hover:text-blue-500"><FaFacebook size={24} /></a>
                <a href="#twitter" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                <a href="#instagram" className="hover:text-pink-500"><FaInstagram size={24} /></a>
                <a href="#linkedin" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; 2024 
        </div>
      </div>
    </footer>
  );
}

export default Footer;
