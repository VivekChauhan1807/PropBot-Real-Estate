import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">PropBot</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link to="/" className="text-[#4a61a0] font-medium hover:text-[#1d3a89] transition-colors underline decoration-2 underline-offset-4">
              Home
            </Link>
            <Link to="/buy" className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors">
              Buy
            </Link>
            <Link to="/rent" className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors">
              Rent
            </Link>
            <Link to="/sell" className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors">
              Sell
            </Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              to="/login" 
              className="bg-[#4a61a0] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1d3a89] transition-colors flex items-center space-x-2"
            >
              <span>Login / Register</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className="text-[#4a61a0] font-medium hover:text-[#1d3a89] transition-colors px-4 py-2 underline decoration-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/buy" 
                className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </Link>
              <Link 
                to="/rent" 
                className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <Link 
                to="/sell" 
                className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 font-medium hover:text-[#4a61a0] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="px-4 pt-2">
                <Link 
                  to="/login" 
                  className="bg-[#4a61a0] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1d3a89] transition-colors flex items-center justify-center space-x-2 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Login / Register</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;