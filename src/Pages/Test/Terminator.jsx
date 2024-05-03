import React, { useState, useEffect } from 'react';

const Terminator = () => {
  // Define the URL for the audio file
  const audioUrl = '/Terminator.mp3';

  // State to manage the volume
  const [volume, setVolume] = useState(0.2); // Initial volume set to 0.2 (20%)

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.volume = volume; // Set initial volume

    const playAudio = () => {
      audio.play();
    };

    const stopAudio = () => {
      audio.pause();
    };

    playAudio();

    return () => {
      stopAudio();
    };
  }, [audioUrl, volume]);

  // Function to handle volume change
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  // Function to handle home button click
  const handleHomeButtonClick = () => {
    window.location.href = "/"; // Redirect to the home page
  };

  return (
    <div>
      <iframe 
        src="/terminator.html" 
        title="Terminator" 
        className="w-full min-h-screen md:full md:full lg:h-full xl:h-full" 
        frameBorder="0" 
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="fixed bottom-4 right-16 w-36 bg-gray-200 rounded-lg shadow"
      />
      <button
        onClick={handleHomeButtonClick}
        className="fixed bottom-4 left-16 px-4 py-2 bg-gray-200 rounded-lg shadow"
      >
        Home
      </button>
    </div>
  );
};

export default Terminator;
