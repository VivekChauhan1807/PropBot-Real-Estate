import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [properties, setProperties] = useState([]);
  const [rentalProperties, setRentalProperties] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('For Rent');
  const [houseType, setHouseType] = useState('Houses');
  const [country, setCountry] = useState('Indonesia');

  useEffect(() => {
    // Fetch properties from API
    fetch('https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing')
      .then(response => response.json())
      .then(data => {
        setProperties(data.slice(0, 4)); // First 4 for sale properties
        setRentalProperties(data.slice(4, 8)); // Next 4 for rental properties
      })
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', { searchLocation, propertyType, houseType, country });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero_image1.png" 
            alt="Dream Home" 
            className="w-full h-full object-cover rounded-[50px]"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Dream Home in One Click!
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl">
            Discover, Buy or Rent Verified Properties with Ease.
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-4xl">
            <form onSubmit={handleSearch} className="space-y-4">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Search Location..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a61a0] focus:border-transparent"
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Filter Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4a61a0] focus:border-transparent"
                >
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
                
                <select
                  value={houseType}
                  onChange={(e) => setHouseType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4a61a0] focus:border-transparent"
                >
                  <option>Houses</option>
                  <option>Apartments</option>
                  <option>Condos</option>
                </select>
                
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4a61a0] focus:border-transparent"
                >
                  <option>Indonesia</option>
                  <option>United States</option>
                  <option>Canada</option>
                </select>
                
                <button
                  type="submit"
                  className="bg-[#4a61a0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d3a89] transition-colors"
                >
                  Find Property
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-right">
              <Link to="/advanced-search" className="text-[#4a61a0] text-sm font-medium hover:text-[#1d3a89] transition-colors">
                Not Your Property?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="lg:text-5xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              What We Do?
            </p>
            <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
              Helping you find, buy, and rent the perfect property with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-[#eeeeee] p-6 rounded-xl shadow-sm text-center hover:bg-[#ffffff] transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#bebebe] rounded-full flex items-center justify-center">
                <img src="/images/first_section_icon1.png" alt="Buy & Sell" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buy & Sell<br/>Properties</h3>
              <p className="text-gray-600 text-sm">
                 Find verified homes for sale or list<br/>your property with ease.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-[#eeeeee] p-6 rounded-xl shadow-sm text-center hover:bg-[#ffffff] transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#bebebe] rounded-full flex items-center justify-center">
                <img src="/images/first_section_icon2.png" alt="Find Rental" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Rental<br/>Homes</h3>
              <p className="text-gray-600 text-sm">
                Browse through thousands of<br/>rental options suited to your needs
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-[#eeeeee] p-6 rounded-xl shadow-sm text-center hover:bg-[#ffffff] transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#bebebe] rounded-full flex items-center justify-center">
                <img src="/images/first_section_icon3.png" alt="Smart Search" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart AI<br/>Property Search</h3>
              <p className="text-gray-600 text-sm">
                Get instant recommendations<br/>based on your budget & location
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-[#eeeeee] p-6 rounded-xl shadow-sm text-center hover:bg-[#ffffff] transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#bebebe] rounded-full flex items-center justify-center">
                <img src="/images/first_section_icon4.png" alt="Safe Transactions" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure Transactions</h3>
              <p className="text-gray-600 text-sm">
                Verified listings & secure deals to<br/>ensure a smooth experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Property Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="lg:text-5xl sm:text-4xl font-bold text-[#1e3a8a]">Featured Property</h2>
            <Link 
              to="/listings" 
              className="text-[#4a61a0] font-medium hover:text-[#1d3a89] transition-colors flex items-center space-x-2"
            >
              <span>See All New Property</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Featured Property */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="/images/second_section1.png" 
                alt="Kenanga Residence" 
                className="w-full h-96 lg:h-[478px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm mb-2">By PropBot Real Estate</p>
                <h3 className="text-2xl font-bold">Kenanga Residence</h3>
              </div>
            </div>
            
            {/* Smaller Featured Properties */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src="/images/second_section2.png" 
                  alt="Modern Villa" 
                  className="w-full h-44 lg:h-[226px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <img 
                    src="/images/second_section3.png" 
                    alt="Property 3" 
                    className="w-full h-32 lg:h-[226px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <img 
                    src="/images/second_section4.png" 
                    alt="Property 4" 
                    className="w-full h-32 lg:h-[226px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Properties Available For Sale Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="lg:text-5xl sm:text-4xl font-bold text-[#1e3a8a] mb-2">
                Best Properties Available For Sale
              </h2>
              <p className="text-gray-600 text-2xl">
                Browse our top-rated properties for sale, featuring premium listings tailored to<br/>your needs. Find your dream home today!
              </p>
            </div>
            <Link 
              to="/listings" 
              className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a61a0] transition-colors whitespace-nowrap"
            >
              View More Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div key={property.id} className="bg-[#f1f1f1] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative group cursor-pointer">
                  <img 
                    src={`/images/third_section${index + 1}.png`}
                    alt={property.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    📍 {property.city}, {property.state}
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Spacious 3BHK apartment in a prime location with modern amenities and great connectivity.
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a61a0] transition-colors">
                      Buy Now
                    </button>
                    <span className="text-lg font-bold text-gray-900">$450,000</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find The Perfect Rental Home Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="lg:text-5xl text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-2">
                Find The Perfect Rental Home
              </h2>
              <p className="text-gray-600 text-2xl">
                Browse our top-rated properties for rent, featuring premium listings tailored to<br/>your needs. Find your dream home today!
              </p>
            </div>
            <Link 
              to="listings" 
              className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a61a0] transition-colors whitespace-nowrap"
            >
              View All Rentals
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalProperties.map((property, index) => (
              <div key={property.id} className="bg-[#f1f1f1] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative group cursor-pointer">
                  <img 
                    src={`/images/fourth_section${index + 1}.png`}
                    alt={property.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    📍 {property.city}, {property.state}
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Spacious 2BHK apartment in a prime location with modern amenities and great connectivity.
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a61a0] transition-colors">
                      Buy Now
                    </button>
                    <span className="text-lg font-bold text-gray-900">$1,500/month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Journey Today Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="lg:text-5xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
            Start Your Journey Today!
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Create a profile in seconds and find your ideal home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md ">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a61a0] focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Enter Your Location"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a61a0] focus:border-transparent"
            />
            <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a61a0] transition-colors whitespace-nowrap">
              Continue
            </button>
          </div>
        </div>
      </section>

      {/* We Provide Latest Properties Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="/images/fifth_section_back.png" 
                  alt="Property Background" 
                  className="w-full max-w-md mx-auto lg:mx-0"
                />
                <img 
                  src="/images/fifth_section_front.png" 
                  alt="Property Front" 
                  className="absolute top-8 left-8 w-4/5 max-w-sm"
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div>
              <h2 className="lg:text-4xl sm:text-4xl font-bold text-[#1e3a8a] mb-20">
                We Provide Latest Properties For Our Valuable Clients
              </h2>
              
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <img src="/images/fifth_section_icon1.png" alt="Budget Friendly" className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="lg:text-3xl font-semibold text-[#1e3a8a] mb-2">Budget Friendly</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <img src="/images/fifth_section_icon2.png" alt="Trusted By Thousand" className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="lg:text-3xl font-semibold text-[#1e3a8a] mb-2">Trusted By Thousand</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <img src="/images/fifth_section_icon3.png" alt="Prime Location" className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="lg:text-3xl font-semibold text-[#1e3a8a] mb-2">Prime Location</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;