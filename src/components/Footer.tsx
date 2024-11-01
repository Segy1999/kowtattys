import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { path: '/about-us', label: 'About Us' },
  { path: '/policies', label: 'Policies' },
];

const Footer = () => {
  return (
    <footer className="bg-[#C89D7C] oswald text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-montserrat">
              &copy; {new Date().getFullYear()} Kow Tattys
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center justify-center md:justify-end space-x-2 text-lg font-montserrat">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-gray-200 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full" />
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="text-white/80">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
