import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
    // You would typically redirect or filter content based on searchQuery
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo and mobile menu button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="/" className="text-2xl font-bold text-white">
            MyApp
          </a>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Search bar - centered on desktop, full width on mobile */}
        <div className="w-full md:w-auto md:flex-1 md:px-4 mt-4 md:mt-0">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        {/* Navigation links */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}>
          <a href="/" className="block hover:text-blue-400 transition duration-200 py-1 font-medium">
            Home
          </a>
          <a href="/products" className="block hover:text-blue-400 transition duration-200 py-1 font-medium">
            Products
          </a>
          <a href="/about" className="block hover:text-blue-400 transition duration-200 py-1 font-medium">
            About
          </a>
          <a href="/contact" className="block hover:text-blue-400 transition duration-200 py-1 font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;