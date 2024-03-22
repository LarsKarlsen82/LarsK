// Terminator.jsx

import React from 'react';

const Terminator = () => {
  // Define the URL for the terminator.html file
  const terminatorUrl = '/terminator.html';

  return (
    <iframe src={terminatorUrl} title="Terminator" width="100%" height="600vh" frameBorder="0" />
  );
};

export default Terminator;
