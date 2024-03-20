import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 pl-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Lars Karlsen</h3>
          <p>9000 Aalborg</p>
          <p>Danmark</p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Info</h3>
          <p>MAIL: <a href="mailto:Lars.Karlsen@gmail.com">Lars.Karlsen82@gmail.com</a></p>
          <p>MOBIL: +45 81 94 68 96</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Sociale medier</h3>
          <div className="flex">
            <a
              href="https://www.facebook.com/lars.karlsen.144/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/lars-karlsen-5540971a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            {/* <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl" />
            </a> */}
          </div>
        </div>
              {/* Add a new div for copyright */}
              <div className="w-full mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lars Karlsen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
