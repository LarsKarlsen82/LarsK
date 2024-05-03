import React from 'react';
import errorGif from '../../Assets/images/Error_404.gif';

const NoPage = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <img
        src={errorGif}
        alt="404 Not Found"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default NoPage;
