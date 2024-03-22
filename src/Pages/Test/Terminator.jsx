//Terminator.jsx
import React from 'react';

const Terminator = () => {
  // Define the URL for the terminator.html file
  const terminatorUrl = '/terminator.html';

  return (
    <iframe 
      src={terminatorUrl} 
      title="Terminator" 
      className="w-full min-h-screen md:full md:h-full lg:h-full xl:h-full" 
      frameBorder="0" 
    />
  );
};

export default Terminator;
