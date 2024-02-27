import React, { useState } from 'react';

const Home = () => {
  const [carPosition, setCarPosition] = useState(0);

  const moveCar = () => {
    setCarPosition((prevPosition) => prevPosition + 50); // Adjust the value based on your design
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Velkommen til min side</h1>
        <p className="text-lg">
          Discover amazing content and explore exciting features.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-white text-indigo-500 px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300"
            onClick={moveCar}
          >
            Get Started
          </a>
        </div>
      </div>
      {/* Car Element with inline style for animation */}
      <div
        className="text-2xl"
        style={{
          transform: `translateX(${carPosition}px)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        🚗
      </div>
    </div>
  );
};

export default Home;
