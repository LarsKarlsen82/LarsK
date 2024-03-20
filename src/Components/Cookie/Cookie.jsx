import React, { useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    // Set a cookie or perform any necessary actions when the user accepts
    // In this example, we use localStorage to store the user's preference
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Perform any necessary actions when the user declines
    // In this example, we simply hide the consent banner
    setShowConsent(false);
  };

  // Check if the user has already accepted the cookie
  const isConsentAccepted = localStorage.getItem('cookieConsent') === 'accepted';

  if (isConsentAccepted || !showConsent) {
    return null; // Do not render the consent banner if already accepted or declined
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 text-center z-10">
      <div className="container mx-auto">
        <p className="mb-2">This website uses cookies to ensure you get the best experience.</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleAccept}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="border border-white text-white px-4 py-2 rounded-md"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
