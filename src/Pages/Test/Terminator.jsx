// // Terminator.jsx

// import React from 'react';

// const Terminator = () => {
//   // Define the URL for the terminator.html file
//   const terminatorUrl = '/terminator.html';

//   return (
//     <iframe src={terminatorUrl} title="Terminator" width="100%" height="600vh" frameBorder="0" />
//   );
// };

// export default Terminator;


import React, { useEffect, useState } from 'react';

const Terminator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const moveBackground = () => {
      const lFollowX = (200 * (window.innerWidth / 2 - x)) / 100;
      const lFollowY = (80 * (window.innerHeight / 2 - y)) / 100;

      const friction = 1 / 30;

      let translate = `translate(${x}px, ${y}px) scale(1.2)`;

      const stage = document.querySelector('.stage');
      stage.style.webkitTransform = translate;
      stage.style.mozTransform = translate;
      stage.style.transform = translate;

      requestAnimationFrame(moveBackground);
    };

    const handleMouseMove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    moveBackground();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber1 = Math.floor(Math.random() * 1000000);
      const newNumber2 = Math.floor(Math.random() * 100000000);
      const newNumber3 = Math.floor(Math.random() * 10000000000);
      const newNumber4 = Math.floor(Math.random() * 100000);

      document.getElementById('randomnumber1').innerText = newNumber1;
      document.getElementById('randomnumber2').innerText = newNumber2;
      document.getElementById('randomnumber3').innerText = newNumber3;
      document.getElementById('randomscan').innerText = newNumber4;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.dimension1').classList.add('show');
    }, 1000);
    setTimeout(() => {
      document.querySelector('.dimension2').classList.add('show');
    }, 2000);
    setTimeout(() => {
      document.querySelector('.dimension3').classList.add('show');
    }, 3000);
    setTimeout(() => {
      document.querySelector('.dimension4').classList.add('show');
    }, 4000);
    setTimeout(() => {
      document.querySelector('.dimension5').classList.add('show');
    }, 5000);
  }, []);

  return (
    <div className="wrapper bg-black h-screen overflow-hidden relative">
      <div className="title h-1/5 flex justify-center items-center">
        <h1 className="text-white text-6xl">TERMINATOR VISION<span className="animate-blink">_</span></h1>
      </div>
      <div className="vision h-4/5 relative">
        <div className="stage w-full h-full absolute"></div>
        <div className="overlay w-full h-full absolute">
          <div className="positionals filter-red_blur absolute bottom-16 left-16">
            <p>X <span className="positionx"></span></p>
            <p>Y <span className="positiony"></span></p>
          </div>
          <div className="model filter-red absolute bottom-16 right-16">
            <p>Model T-800</p>
            <p>Sys Ver 122.9</p>
            <p>Skynet Cyberdyne Systems</p>
          </div>
          <div className="left absolute top-16 left-16">
            <p>SYSTEM BOOT</p>
            <p>ANALYSIS****</p>
            <p id="randomnumber1"></p>
            <p id="randomnumber2"></p>
            <p id="randomnumber3"></p>
            <br /><br /><br /><br />
            <p>THREAT ASSESSMENT</p>
            <p>******************</p>
            <p>TOLERANCE LVL4</p>
            <p>ENGAGE<span className="animate-blink">_</span></p>
          </div>
          <div className="center absolute w-full flex justify-center items-center bottom-16">
            <p>
              <span className="animate-blink">M</span>
              <span className="animate-blink">A</span>
              <span className="animate-blink">T</span>
              <span className="animate-blink">C</span>
              <span className="animate-blink">H</span>
              <span className="animate-blink">_</span>
            </p>
          </div>
          <div className="right absolute top-16 right-16">
            <p>SCAN MODE <span id="randomscan">438894</span></p>
            <p>RESET TO ACQUISITION</p>
            <p>SPEECH GRADE: HUMAN<span className="animate-blink">_</span></p>
            <br /><br /><br /><br />
            <p>VISUAL SCAN</p>
            <p>************</p>
            <p className="dimension1">HGHT 0393</p>
            <p className="dimension2">WGHT 9882</p>
            <p className="dimension3">NECK 3422</p>
            <p className="dimension4">BACK 1112</p>
            <p className="dimension5">FIT PROBABILITY 82%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminator;
