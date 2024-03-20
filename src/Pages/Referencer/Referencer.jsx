import React from 'react';

const Referencer = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600">Referencer</h1>
      <p className="text-gray-800 mt-2 font-bold">Udtalelser og referencer</p>
      <br />
      <p>Post Greenland, Souschef, Harry Holm, e-mail: Harryholm1954@gmail.com tlf.: 24260016</p>
      <br />
      <p>Kommuneqarfik Sermersooq, IT Chef, Michael L. Williams, tlf.: 81929377 efter kl 16</p>
      <br />
      <p>Tester</p>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mt-4 pr-2">
          <embed src="/Udtalelse-Lars-karlsen.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
        <div className="w-full md:w-1/2 mt-4 pl-2">
          <embed src="/Udtalelser.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
      </div>
    </div>
  );
}

export default Referencer;
