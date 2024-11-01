import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <nav className="text-4xl oswald bg-primary text-white py-4 md:py-6 lg:py-8 !bg-primary font-bold">
      <div className="container mx-auto flex justify-between md:flex-row flex-col !justify-between">
        <ul className="flex items-center space-x-4 md:space-x-8 lg:space-x-12 !space-x-12">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 transition duration-300 ${
                activeLink === '/' ? 'text-gray-300' : ''
              }`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`hover:text-gray-300 transition duration-300 ${
                activeLink === '/about-us' ? 'text-gray-300' : ''
              }`}
              onClick={() => handleLinkClick('/about-us')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/policies"
              className={`hover:text-gray-300 transition duration-300 ${
                activeLink === '/policies' ? 'text-gray-300' : ''
              }`}
              onClick={() => handleLinkClick('/policies')}
            >
              Policies
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`hover:text-gray-300 transition duration-300 ${
                activeLink === '/contact-us' ? 'text-gray-300' : ''
              }`}
              onClick={() => handleLinkClick('/contact-us')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`hover:text-gray-300 transition duration-300 ${
                activeLink === '/portfolio' ? 'text-gray-300' : ''
              }`}
              onClick={() => handleLinkClick('/portfolio')}
            >
              Portfolio
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden flex justify-center items-center w-8 h-8 bg-primary rounded-full"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 w-full bg-primary p-4`}
        >
          <ul>
            <li>
              <Link
                to="/"
                className={`hover:text-gray-300 transition duration-300 ${
                  activeLink === '/' ? 'text-gray-300' : ''
                }`}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`hover:text-gray-300 transition duration-300 ${
                  activeLink === '/about-us' ? 'text-gray-300' : ''
                }`}
                onClick={() => handleLinkClick('/about-us')}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/policies"
                className={`hover:text-gray-300 transition duration-300 ${
                  activeLink === '/policies' ? 'text-gray-300' : ''
                }`}
                onClick={() => handleLinkClick('/policies')}
              >
                Policies
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`hover:text-gray-300 transition duration-300 ${
                  activeLink === '/contact-us' ? 'text-gray-300' : ''
                }`}
                onClick={() => handleLinkClick('/contact-us')}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`hover:text-gray-300 transition duration-300 ${
                  activeLink === '/portfolio' ? 'text-gray-300' : ''
                }`}
                onClick={() => handleLinkClick('/portfolio')}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;