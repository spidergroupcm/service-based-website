



import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { FaSearch, FaSortAmountDownAlt, FaMapMarkerAlt } from "react-icons/fa";
const Services = () => {
  const services = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [filterArea, setFilterArea] = useState('Dhaka'); 

  const serviceAreas = [
    'Dhaka', 'Gulshan', 'Banani', 'Uttara', 'Dhanmondi', 'Mirpur', 'Badda', 
    'Mohakhali', 'Tejgaon', 'Baridhara', 'Pallabi', 'Rampura', 'Shantinagar',
    'Motijheel', 'Farmgate', 'Wari', 'Khilgaon', 'Shyamoli', 'Azimpur', 
    'Old Dhaka', 'Lalbagh', 'Jatrabari', 'Savar', 'Keraniganj'
  ];

  const filteredServices = services
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArea = filterArea === 'Dhaka' || service.serviceArea === filterArea;
      return matchesSearch && matchesArea;
    })
    .sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.price - b.price;
      } else if (sortOrder === 'descending') {
        return b.price - a.price;
      }
      return 0; // No sorting for 'default'
    });

  return (
    <div className="mx-auto p-10 bg-gradient-to-r from-blue-700 via-purple-400 to-blue-600 ">
    
    <h1 className="text-4xl font-bold text-white text-center my-6">🚀 Explore Our Services 🚀</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

        
  {/* Search Input */}
  <div className="relative w-full max-w-xs">
    <input
      type="text"
      placeholder="Search by title..."
      className="input input-bordered w-full pl-10 bg-white text-black font-semibold"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <FaSearch className="absolute left-3 top-3 text-gray-500" />
  </div>

  {/* Dropdown for Sorting */}
  <div className="relative w-full max-w-xs">
    <select
      className="select select-bordered w-full pl-10 bg-white text-black"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="default">Sort by Price</option>
      <option value="ascending">Price: Low to High</option>
      <option value="descending">Price: High to Low</option>
    </select>
    <FaSortAmountDownAlt className="absolute left-3 top-3 text-gray-500" />
  </div>

  {/* Dropdown for Filtering by Service Area */}
  <div className="relative w-full max-w-xs">
    <select
      className="select select-bordered w-full pl-10 bg-white text-black"
      value={filterArea}
      onChange={(e) => setFilterArea(e.target.value)}
    >
      {serviceAreas.map(area => (
        <option key={area} value={area}>{area}</option>
      ))}
    </select>
    <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
  </div>
</div>


      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredServices.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;


