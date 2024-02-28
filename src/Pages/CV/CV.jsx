
import React, { useState } from 'react';

const CV = () => {
  const [activeTab, setActiveTab] = useState('erhvervserfaring'); // Default to 'erhvervserfaring'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
            {/* Introduction */}
        <div className="mb-6">
           <h3 className="text-xl font-bold mb-2">Introduktion – Lidt om mig selv</h3>
           <p className="text-gray-700">
             Jeg er super lærenem fyr og har masser af arbejdserfaring indenfor kontor og IT og projekter.
             Som medarbejder er jeg flink, lærenem og god til at holde hovedet koldt - selv i pressede situationer.
             Som kollega bidrager jeg med et godt humør. Jeg arbejder fint med andre i teams og kan sagtens arbejde selvstændigt.
            Jeg finder det vigtigt at yde et godt service til kunder eller brugere samt at have godt samarbejde med kollega.
            Jeg søger primært jobs i Aalborg, hvor jeg kan komme til med offentlig transport og kan arbejde dag og weekendarbejde.
          </p>
         </div>

            {/* Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Kompetencer</h3>
          <ul className="list-disc list-inside pl-4">
            <li>Kundeservice - Har masser af erfaring med at supportere forskellige brugere via telefon og ved siden af brugeren samt besvare e-mails.</li>
            <br />
            <li>Kommunikation - Gode dansk og engelske sprogkundskaber både mundtligt og skriftligt.</li>
            <br />
            <li>IT - Vant til IT-support, software og hardware opgraderinger. Rigtig god til at bruge MS Office (Word, Excel, PowerPoint og Outlook) og webudvikling.</li>
          </ul>
         </div>

        <div className="flex mb-6">
          <div
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'erhvervserfaring' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleTabClick('erhvervserfaring')}
          >
            Erhvervserfaring
          </div>
          <div
            className={`cursor-pointer py-2 px-4 ${
              activeTab === 'uddannelse' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleTabClick('uddannelse')}
          >
            Uddannelse
          </div>
        </div>

        
{activeTab === 'erhvervserfaring' && (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">Erhvervserfaring</h3>
    <br />
    {/* Work experiences with tabs */}
    <div className="grid grid-cols-2 gap-6">
      <div>
        <span className="font-extrabold text-lime-500">2023 feb - 2023 maj</span>
        <br /> <br />
        <span className="font-bold">Center for Skoleoplæring, Aalborg Handelsskole, </span> Aalborg <br />
        <span className="italic"> Detail, - handelselev</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Opgaver indenfor detail og handel
      </div>

      <div>
        <span className="font-extrabold text-lime-500">2019 sep - 2020 marts</span>
        <br /> <br />
        <span className="font-bold">Kommuneqarfik Sermersooq, </span> Nuuk <br />
        <span className="italic"> Projektkonsulent</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Undervisning, implementering af nyt system, dokumentation
      </div>

      <div>
        <span className="font-extrabold text-teal-600">2016 aug. - 2019 sep</span>
        <br /> <br />
        <span className="font-bold">Uddannelses styrelsen, </span> Nuuk <br />
        <span className="italic"> TNI-praktikant</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Kontorarbejde, bestilling og telefon support
      </div>

      <div>
        <span className="font-extrabold text-teal-600">2016 juni. - 2016 aug.</span>
        <br /> <br />
        <span className="font-bold">Retten i Grønland, </span> Nuuk <br />
        <span className="italic"> IT-vikar</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Support, fejlfinding, bestilling
      </div>

      <div>
        <span className="font-extrabold text-lime-500">2015 nov. - 2015 dec.</span>
        <br /> <br />
        <span className="font-bold">Royal Arctic Line, </span> Nuuk <br />
        <span className="italic"> IT-vikar</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Support, fejlfinding, bestilling
      </div>

      <div>
        <span className="font-extrabold text-lime-500">2011 jan. - 2015 nov.</span>
        <br /> <br />
        <span className="font-bold">Kommuneqarfik Sermersooq, </span> Nuuk <br />
        <span className="italic"> IT-Supporter</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Support, fejlfinding og dokumentation
      </div>

      <div>
        <span className="font-extrabold text-teal-600">2001 jan. - 2010 dec.</span>
        <br /> <br />
        <span className="font-bold">Post Greenland (Tusass), </span> Nuuk <br />
        <span className="italic"> Postbud, Postoverassistent, afdelingsleder</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Sortering, lægge pakker, omdeling af post og adresseløse, ledelse m.v.
      </div>

      <div>
        <span className="font-extrabold text-teal-600">2011 jan. - 2015 nov.</span>
        <br /> <br />
        <span className="font-bold">Brugseneeraq, </span> Maniitsoq <br />
        <span className="italic"> Butiksmedarbejder</span> <br />
        <span className='font-bold'>Arbejdsopgaver:</span> Kundeservice, lægge varer på plads, tømme flaskerum m.v.
      </div>
      {/* Add more work experiences as needed */}
    </div>
  </div>
)}

        {activeTab === 'uddannelse' && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Uddannelse</h3>
            <br />
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="font-extrabold text-teal-600">2023 aug. - 2024 .</span>
                    <br /> <br />
                    <span className="font-bold">Webudvikler, </span> Aalborg <br />
                    <span className="italic"> Tech College Aalborg</span> <br />
                    <span className='font-bold'>Arbejdsopgaver:</span> Lære webudvikler
                </div>

                <div>
                    <span className="font-extrabold text-teal-600">2022 jan. - 2023 juli.</span>
                    <br /> <br />
                    <span className="font-bold">EUD Business, </span> Aalborg <br />
                    <span className="italic"> Aalborg Handelsskolen</span> <br />
                    <span className='font-bold'>Arbejdsopgaver:</span> Kundeservice, teknologi
                </div>

                <div>
                    <span className="font-extrabold text-lime-500">2020 aug. - 2021 jan.</span>
                    <br /> <br />
                    <span className="font-bold">Webudvikler, </span> Aalborg <br />
                    <span className="italic"> Tech College Aalborg</span> <br />
                    <span className='font-bold'>Arbejdsopgaver:</span> Lære webudvikler
                </div>

                <div>
                    <span className="font-extrabold text-lime-500">2016 . - 2019 .</span>
                    <br /> <br />
                    <span className="font-bold">TNI (Kontor) uddannelsen, </span> Nuuk <br />
                    <span className="italic"> Niuermik Ilinniarfik</span> <br />
                    <span className='font-bold'>Arbejdsopgaver:</span> Kundeservice, teknologi
                </div>

                <div>
                    <span className="font-extrabold text-teal-600">2011 . - 2013 .</span>
                    <br /> <br />
                    <span className="font-bold">IT-Supporter, </span> Viborg <br />
                    <span className="italic"> Mercantec Skole</span> <br />
                    <span className='font-bold'>Arbejdsopgaver:</span> IT teknologi
                </div>

                <div>
                    <span className="font-extrabold text-teal-600">1988 . - 1999 .</span>
                    <br /> <br />
                    <span className="font-bold">Folkeskolen, </span> Maniitsoq <br />
                    <span className="italic"> Kuuttartup atuarfia, Kilaaseeqqap Atuarfia</span> <br />
                    <span className='font-bold'>Arbejdsopgaver:</span> Alle fag
                </div>


                </div>
            </div>
        )}

        {/* Additional Information */}
        <div>
          <h3 className="text-xl font-bold mb-2">Yderligere information</h3>
          <ul className="list-disc list-inside">
            <li>itil foundation v3 certified</li>
            <li>Prince 2 certified</li>
            <li>Windows 7 kursus</li>
            <li>Taget ICDN1 kursus</li>
            <li>Engelsk kursus NI</li>
            <li>TNI SK1 – SK6 (Salg & Service, erhvervsøkonomi, kontorarbejde)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CV;
