import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Import your logo image
import LogoImage from '../../Assets/images/Logo.jpg';

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-gray-800">
          <div>
            {/* Replace with an img tag for your logo */}
            <Link to="/">
              <img
                src={LogoImage}
                alt="Your Logo"
                className="h-12 w-12 rounded-full"
              />
            </Link>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleMenuToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className={`${
              isMenuVisible ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto`}
            id="menu"
          >
            <ul className="pt-4 text-base text-gray-100 md:flex md:justify-between md:pt-0">
              <li>
              <Link to="/" className="md:p-4 py-2 block hover:text-purple-400">
                  Hjem
                </Link>
              </li>
              <li>
                <Link to="/about" className="md:p-4 py-2 block hover:text-purple-400">
                  Om mig
                </Link>
              </li>
              <li>
              <Link to="/learn" className="md:p-4 py-2 block hover:text-purple-400">
                  Hvad kan jeg?
                </Link>
              </li>
              <li>
              <Link to="/cv" className="md:p-4 py-2 block hover:text-purple-400">
                  Mit CV
                </Link>
              </li>
              <li>
              <Link to="/referencer" className="md:p-4 py-2 block hover:text-purple-400">
                  Referencer
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default NavBar;
