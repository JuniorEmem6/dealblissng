import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hidden, setHidden] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
    // You would typically redirect or filter content based on searchQuery
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-blue-500 shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between">
        {/* Logo and mobile menu button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <p className="text-2xl font-bold text-blue-500">Dealbliss</p>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Search bar - centered on desktop, full width on mobile */}
        <div className="w-full md:w-auto md:flex-1 md:px-4 mt-4 md:mt-0">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 border-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 "
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
            <button
              type="submit"
              className="bg-blue-600 ml-[6px] hover:bg-blue-700 px-4 py-2 rounded-r-md transition duration-200 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        {/* Navigation links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 pb-2 md:pb-0`}
        >

          <Link to="/">
          <p
            className="block hover:text-blue-400 transition duration-200 py-2 px-1 font-medium"
          >
            Home
          </p>
          </Link>

          <Link to="/products">
            <p className="block hover:text-blue-400 transition duration-200 py-2 px-1 font-medium">
              Today Deal
            </p>
          </Link>

          {/* Store with dropdown */}
          <div className="relative group">
            <button
              onClick={() => {
                setHidden(!hidden);
              }}
              className="flex items-center hover:text-blue-400 transition duration-200 py-2 px-1 font-medium"
            >
              Store
              <svg
                className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-10 ${
                hidden ? " " : "hidden"
              } group-hover:block`}
            >
              <a
                href="/store/featured"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                FundedNext
              </a>
              <a
                href="/store/categories"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Oraimo
              </a>
              <a
                href="/store/locations"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Oraimo Ghana
              </a>
            </div>
          </div>

          <Link to="/submit-store">
            <p className="block hover:text-blue-400 transition duration-200 py-2 px-1 font-medium">
              Submit a store
            </p>
          </Link>

          <a
            href="/contact"
            className="block hover:text-blue-400 transition duration-200 py-2 px-1 font-medium"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
