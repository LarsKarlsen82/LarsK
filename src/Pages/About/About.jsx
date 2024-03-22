import React from 'react';

const About = () => {
  return (
    <>
      <figure className="md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-12 ">
        <div className="group">
          <img
            className="w-64 h-64 md:w-1/2 md:h-auto md:rounded-none rounded-full mx-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110 pl-2 pb-8"
            src="/images/Lars.jpg"
            alt=""
            width="384"
            height="512"
          />
        </div>
        <div className="pt-6 md:p-8 md:pl-6 text-center md:text-left space-y-4">
          <blockquote className="text-lg font-medium text-slate-700 dark:text-slate-500">
            "Mit navn er Lars, og jeg er en veluddannet IT-supporter med kompetencer inden 
            for webudvikling samt erfaring inden for kontor- og butiksdrift. 
            Jeg besidder en bred vifte af færdigheder, der gør mig i stand til at håndtere udfordringer inden for IT-support og 
            udvikling af webapplikationer samt effektivt håndtere opgaver i både kontor- og butiksmiljøer."
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Lars Karlsen</div>
            <div className="text-slate-700 dark:text-slate-500">
              Webudvikler/IT-supporter, Aalborg
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default About;
