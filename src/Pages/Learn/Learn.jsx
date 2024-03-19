import React from 'react';

const Learn = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 pl-4">Hvad kan jeg?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Grid 1 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/HTML.jpg"  // Replace with actual image sources
            alt="HTML"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
          
          "HTML er for mig en afgørende komponent i opbygningen af det digitale landskab. 
          Det er ikke bare en samling af koder, men et sprog, der giver mig mulighed for at formidle idéer og skabe interaktivitet på nettet. 
          Med HTML kan jeg strukturere og præsentere indhold på en klar og forståelig måde, hvilket gør det muligt for mig at skabe weboplevelser, der engagerer og informerer brugerne. 
          Det er en kraftfuld værktøj, der åbner døre til en verden af ​​muligheder inden for webudvikling."
          </p>
        </div>

        {/* Grid 2 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/CSS.jpg"  // Replace with actual image source
            alt="CSS"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
            
          "Jeg er fortrolig med CSS og bruger det til at designe og style websider og applikationer. 
          CSS giver mig kontrol over layout, farver, skrifttyper og andre visuelle elementer, 
          så jeg kan skabe æstetisk tiltalende og funktionelle brugergrænseflader." 
          </p>
        </div>

        {/* Grid 3 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/JS.png"  // Replace with actual image source
            alt="JavaScript"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
          "Jeg har erfaring med JavaScript (JS) og bruger det til at tilføje interaktivitet og dynamik til websider og applikationer. 
          Med JS kan jeg manipulere DOM'en (Document Object Model), håndtere brugerinteraktioner, foretage HTTP-anmodninger til serveren og meget mere. 
          Jeg anvender JS til at skabe responsiv og engagerende brugeroplevelser på tværs af forskellige enheder og platforme."
          </p>
        </div>

        {/* Grid 4 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/TailWindCSS.png"  // Replace with actual image source
            alt="TailWindCss"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
          "Jeg bruger Tailwind CSS til hurtigt at style websider og applikationer ved hjælp af genanvendelige utility-klasser. 
          Tailwind's utility-first tilgang gør det nemt at opbygge og tilpasse designs på en effektiv måde."
          </p>
        </div>

        {/* Grid 5 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/Vite.jpg"  // Replace with actual image source
            alt="Vite-React"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
          
          "Jeg er fortrolig med Vite, som er et moderne byggeværktøj til udvikling af webapplikationer. 
          Specifikt med React, Vite gør det muligt at opbygge og køre React-projekter med hurtigere byggetider 
          og en mere glat udviklingsoplevelse. Det udnytter moderne JavaScript-moduleringsmetoder og 
          udnytter mulighederne for hurtig udvikling og live-ændring, hvilket gør det til et kraftfuldt 
          værktøj til React-udvikling.
          </p>
        </div>

        {/* Grid 6 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/Supabase.png"  // Replace with actual image source
            alt="Supabase"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">

          "Supabase er en platform, der giver udviklere mulighed for at bygge og administrere bagsiden 
          af deres web- og mobilapplikationer. Det tilbyder funktioner som brugerstyring, 
          databasehåndtering og realtidsopdateringer. Med Supabase kan udviklere oprette 
          og administrere databaser og brugerkonti på en nem måde, hvilket gør det lettere at 
          opbygge funktionelle og skalerbare applikationer.
          </p>
        </div>

        {/* Grid 7 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/IT.jpg"  // Replace with actual image source
            alt="Information-Technology"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">
        
          "Som IT-supporter betyder det at tilbyde teknisk hjælp og løsninger til brugere, 
          der oplever problemer med deres it-udstyr, software eller netværk. 
          At være dygtig til IT-support indebærer at have en solid forståelse for 
          teknologi og være i stand til at hjælpe brugere med at løse deres it-relaterede problemer og spørgsmål."
          </p>
        </div>

        {/* Grid 8 */}
        <div className="group bg-gray-100 p-4 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/images/MS_Office.jpg"  // Replace with actual image source
            alt="MS_Office"
            className="w-full h-40 object-cover mb-4 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110"
          />
          <p className="text-gray-700">


          "Jeg har en god forståelse og beherskelse af MS Office-pakken, 
          herunder Word, Excel og PowerPoint. Min viden tillader mig at håndtere komplekse opgaver effektivt, 
          skabe professionelle dokumenter og præsentationer samt analysere data på avanceret niveau."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
