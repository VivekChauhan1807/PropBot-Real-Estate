import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Listings() {
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
        setProperties(data.slice(0, 38)); // First 4 for sale properties
        setRentalProperties(data.slice(19, 50)); // Next 4 for rental properties
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
            src="/images/hero_image2.png" 
            alt="Dream Home" 
            className="w-full h-full object-cover rounded-[50px]"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover New Properties For Buy, Rent & Sale !
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl">
            Discover, Buy or Rent Verified Properties with Ease.
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-4xl">
            <form onSubmit={handleSearch} className="space-y-4">
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

      {/* Best Properties Available For Sale Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="lg:text-5xl sm:text-4xl font-bold text-[#1e3a8a] mb-2">
                Discover All Best Featured Properties
              </h2>
              <p className="text-gray-600 text-2xl">
                Browse our top-rated properties for sale, featuring premium listings tailored to<br/>your needs. Find your dream home today!
              </p>
            </div>
            <Link 
              to="/listings" 
              className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a61a0] transition-colors whitespace-nowrap"
            >
              See 300+ New Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div key={property.id} className="bg-[#f1f1f1] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative group cursor-pointer">
                  <img 
                    src={`/images/listings_property${index + 1}.png`}
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
                    <span className="text-sm text-gray-600">5 Star Ratings</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Spacious 3BHK apartment in a prime location with modern amenities and great connectivity.
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">$450,000</span>
                    <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a61a0] transition-colors">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Listings;