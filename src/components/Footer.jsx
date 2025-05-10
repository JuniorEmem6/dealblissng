import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Newsletter & Social */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          {/* Newsletter Signup */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <p className="mb-6">Connect with us on social media</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <Link to="/about">
                <li className="hover:text-white transition-colors">About Us</li>
              </Link>
              <li className="hover:text-white transition-colors"><a href="http://wa.me/2347039729635" target="_blank" rel="noopener noreferrer">Contact</a></li>
              <div className="flex gap-4">
                <Link to="/privacy" onClick={scrollToTop}>
                  <li className="hover:text-white transition-colors">
                    Privacy Policy
                  </li>
                </Link>
                <Link to="/term" onClick={scrollToTop}>
                  <li className="hover:text-white transition-colors">
                    Terms of Service
                  </li>
                </Link>

                <Link to="/affiliate" onClick={scrollToTop}>
                  <li className="hover:text-white transition-colors">
                    Affilate Disclosure
                  </li>
                </Link>
              </div>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Trending Deals
            </h4>
            <ul className="space-y-2">
              <Link to="/fundednext" onClick={scrollToTop}>
                <li className="hover:text-white transition-colors">
                  FundedNext
                </li>
              </Link>
              <Link to="/exness" onClick={scrollToTop}>
                <li className="hover:text-white transition-colors">Exness</li>
              </Link>
              <Link to="/ftmo" onClick={scrollToTop}>
                <li className="hover:text-white transition-colors">FTMO</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
