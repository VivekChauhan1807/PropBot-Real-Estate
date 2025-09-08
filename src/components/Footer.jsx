import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#4a61a0] to-[#1d3a89] text-white">
      {/* Newsletter Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Get in Touch with Us
          </h1>
          <h5 className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 lg:mb-12 text-white/90 font-normal">
            Subscribe now for exclusive property insights and deals!
          </h5>
          
          {/* Email Subscription Form */}
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent text-gray-700 placeholder-gray-500 px-4 sm:px-6 py-2 sm:py-3 flex-1 outline-none text-sm sm:text-base font-medium"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1d3a89] hover:bg-[#152d6b] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-t border-white/20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-xl sm:text-2xl font-bold">PropBot</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            <a href="/for-sale" className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
              For Sale
            </a>
            <a href="/rentals" className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
              Rentals
            </a>
            <a href="/new-projects" className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
              New Projects
            </a>
            <a href="/property-news" className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base">
              Property News
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/80 text-xs sm:text-sm">
            @2025 Propbot. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;