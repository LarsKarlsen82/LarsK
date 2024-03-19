import React from 'react';

const Customers = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 pl-4">Stuff</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Customer 1 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/HTML.jpg"  // Replace with actual image sources
            alt="Customer 1"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Customer 2 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/FlightMode.jpg"  // Replace with actual image source
            alt="Customer 2"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Customer 3 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/House.jpg"  // Replace with actual image source
            alt="Customer 3"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Customer 4 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/Lighthouse.jpg"  // Replace with actual image source
            alt="Customer 3"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Customer 5 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/Mountain.jpg"  // Replace with actual image source
            alt="Customer 3"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Customer 6 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/Rocks.jpg"  // Replace with actual image source
            alt="Customer 3"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
