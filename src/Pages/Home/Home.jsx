
// // import React, { useState } from 'react';
// // import backgroundImage from '/images/NL.jpg'; 

// // const Home = () => {
// //   const [smileyPosition, setSmileyPosition] = useState(0);

// //   const moveSmiley = () => {
// //     setSmileyPosition((prevPosition) => prevPosition + 50); // Adjust the value based on your design
// //   };

// //   return (
// //     <div
// //       className="min-h-screen flex flex-col items-center justify-center"
// //       style={{
// //         backgroundImage: `url(${backgroundImage})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         backgroundRepeat: 'no-repeat',
// //       }}
// //     >
// //       <div className="text-white text-center">
// //         <h1 className="text-4xl font-bold mb-4">Velkommen til min side</h1>
// //         <p className="text-lg">
// //           Denne Web App er for at vise hvad jeg kan med webudvikling, klik på NavLinks
// //         </p>
// //         <div className="mt-8">
// //           <a
// //             href="#"
// //             className="bg-white text-indigo-500 px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300"
// //             onClick={moveSmiley}
// //           >
// //             Get Started
// //           </a>
// //         </div>
// //         {/* Smiley Element with inline style for animation */}
// //         <div
// //           className="text-2xl mt-4"
// //           style={{
// //             transform: `translateX(${smileyPosition}px)`,
// //             transition: 'transform 1s ease-in-out',
// //           }}
// //         >
// //           😊
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useState, useEffect } from 'react';
// import backgroundImage from '/images/NL.jpg';

// const Home = () => {
//   const [smileyPosition, setSmileyPosition] = useState(0);
//   const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

//   const moveSmiley = () => {
//     setSmileyPosition((prevPosition) => prevPosition + 50);
//     setIsAnimationPlaying(true);
//   };

//   useEffect(() => {
//     // Class Selector
//     const texts = document.querySelectorAll(".FadeText");
//     const delayMultiplier = 0.03;

//     texts.forEach(text => {
//       let htmlTag = false;
//       let content = "";

//       for(let i = 0; i < text.innerHTML.length; i++) {
//         const delay = (delayMultiplier * i).toFixed(2);
//         let char = text.innerHTML.charAt(i);

//         if(char === "<") {
//           htmlTag = true;
//         }

//         if(htmlTag === false) {
//           content += `<span style='animation-delay:${delay}s'>${char}</span>`;
//         } else {
//           content += char;
//         }

//         if(char === ">") {
//           htmlTag = false;
//         }
//       }

//       text.innerHTML = content;
//     });

//     // Start fade-in, fade-out animation
//     let elements = document.querySelectorAll(".container > *");
//     let index = -1;

//     function fadeInNextElement() {
//       ++index;
//       if (index < elements.length) {
//         elements[index].classList.add('opacity-100');
//         setTimeout(() => {
//           elements[index].classList.remove('opacity-100');
//           fadeInNextElement();
//         }, 2000); // Adjust the duration for your desired timing
//       }
//     }

//     fadeInNextElement();
//   }, []);

//   useEffect(() => {
//     if (isAnimationPlaying) {
//       const canvas = document.getElementById('canvas');
//       const context = canvas.getContext('2d');

//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       const particles = [];
//       const numParticles = Math.min(Math.floor(canvas.width * canvas.height / 5000), 300);

//       class Particle {
//         constructor() {
//           this.x = Math.random() * canvas.width;
//           this.y = Math.random() * canvas.height;
//           this.vx = Math.random() * 2 - 1;
//           this.vy = Math.random() * 2 - 1;
//           this.radius = Math.random() * 3 + 1;
//           this.color = `rgba(255, 255, 255, ${Math.random()})`;
//         }

//         update() {
//           this.x += this.vx;
//           this.y += this.vy;

//           if (this.x < 0 || this.x > canvas.width) {
//             this.vx *= -1;
//           }

//           if (this.y < 0 || this.y > canvas.height) {
//             this.vy *= -1;
//           }
//         }

//         draw() {
//           context.beginPath();
//           context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//           context.fillStyle = this.color;
//           context.fill();
//         }
//       }

//       function createParticles() {
//         for (let i = 0; i < numParticles; i++) {
//           particles.push(new Particle());
//         }
//       }

//       function animate() {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         particles.forEach((particle) => {
//           particle.update();
//           particle.draw();
//         });

//         requestAnimationFrame(animate);
//       }

//       createParticles();
//       animate();


//       canvas.addEventListener('mousemove', (event) => {
//         particles.forEach((particle) => {
//           const dx = particle.x - event.clientX;
//           const dy = particle.y - event.clientY;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             particle.vx = dx * 0.05;
//             particle.vy = dy * 0.05;
//           }
//         });
//       });

//       // Stop animation after a certain duration (adjust as needed)
//       const animationDuration = 20000; // milliseconds
//       setTimeout(() => {
//         setIsAnimationPlaying(false);
//       }, animationDuration);
//     }
//   }, [isAnimationPlaying]);



//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="container text-white text-center">
//         <h1 className="text-4xl font-bold mb-4 FadeText opacity-0">Velkommen til min side</h1>
//         <p className="text-lg FadeText opacity-0">
//           Denne Web App er for at vise hvad jeg kan med webudvikling, klik på NavLinks
//         </p>
//         <div className="mt-8">
//           <button
//             className="bg-white text-indigo-500 px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300"
//             onClick={moveSmiley}
//           >
//             Get Started
//           </button>
//         </div>
//         {/* Smiley Element with inline style for animation */}
//         <div
//           className="text-2xl mt-4"
//           style={{
//             transform: `translateX(${smileyPosition}px)`,
//             transition: 'transform 1s ease-in-out',
//           }}
//         >
          
//         </div>
//         {/* Canvas for particle animation */}
//         {isAnimationPlaying && <canvas id="canvas" className="absolute top-0 left-0 w-full h-full"></canvas>}
//       </div>
//     </div>
//   );
// };

// export default Home;


// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from '/images/NL.jpg';

const Home = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Function to apply text animation
    const applyAnimation = (element) => {
      const content = element.textContent.trim().split("");
      element.innerHTML = content
        .map(
          (char, i) =>
            `<span style="animation-delay:${i * 0.03}s">${char}</span>`
        )
        .join("");
    };

    // Apply text animation on mount
    applyAnimation(textRef.current);
  }, []);

  useEffect(() => {
    if (isAnimationPlaying) {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const numParticles = Math.min(Math.floor(canvas.width * canvas.height / 5000), 300);

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = Math.random() * 2 - 1;
          this.vy = Math.random() * 2 - 1;
          this.radius = Math.random() * 3 + 1;
          this.color = `rgba(255, 255, 255, ${Math.random()})`;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -1;
          }

          if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -1;
          }
        }

        draw() {
          context.beginPath();
          context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          context.fillStyle = this.color;
          context.fill();
        }
      }

      function createParticles() {
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle());
        }
      }

      function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });

        requestAnimationFrame(animate);
      }

      createParticles();
      animate();

      const handleMouseMove = (event) => {
        particles.forEach((particle) => {
          const dx = particle.x - event.clientX;
          const dy = particle.y - event.clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            particle.vx = dx * 0.05;
            particle.vy = dy * 0.05;
          }
        });
      };

      canvas.addEventListener('mousemove', handleMouseMove);

      // Cleanup function
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isAnimationPlaying]);

  const startParticleAnimation = () => {
    setIsAnimationPlaying(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className= "min-h-screen flex items-center justify-center">
        <div className="wrapper max-w-screen-md text-white text-center">
          <h1 className='text-3xl mb-4'>Velkommen til min side</h1>
          {/* Render the animated text */}
          <p ref={textRef} className="FadeText font-semibold">
            Denne Web App er for at vise hvad jeg kan med webudvikling, klik på NavLinks
          </p>
          <br />
          <button
            className="bg-white text-indigo-500 px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300"
            onClick={startParticleAnimation}
          >
            Klik på mig 😊
          </button>
        </div>
        <style>
          {`
            .FadeText span {
              animation: FadeText 0.3s forwards;
              opacity: 0.1;
            }

            @keyframes FadeText {
              from { opacity: 0.1; }
              to { opacity: 1; }
            }
          `}
        </style>
      </div>
      {/* Canvas for particle animation */}
      {isAnimationPlaying && <canvas id="canvas" className="absolute top-0 left-0 w-full h-full"></canvas>}
    </div>
  );
};

export default Home;
