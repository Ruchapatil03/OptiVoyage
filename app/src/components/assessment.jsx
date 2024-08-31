import React from 'react';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
  const navigate = useNavigate();

  const handleMoreInfo = (data) => {
    localStorage.setItem('journeyData', JSON.stringify(data));
    navigate('/details');
  };

  const tripData = [
    {
      "src": "Mumbai, India (Jawaharlal Nehru Port Trust)",
      "dest": "Cochin, India (Cochin Port)",
      "intermediateCities": [
        { "city": "Goa, India (Mormugao Port)", "temperature": 29, "speed": 15, "salinity": 35, "depth": 30 },
        { "city": "Mangalore, India (New Mangalore Port)", "temperature": 32, "speed": 14, "salinity": 34, "depth": 28 },
        { "city": "Kochi, India (Cochin Port)", "temperature": 30, "speed": 16, "salinity": 36, "depth": 25 }
      ],
      "totalTime": "15 hours"
    },
    {
      "src": "Chennai, India (Chennai Port)",
      "dest": "Port Blair, India (Port Blair Port)",
      "intermediateCities": [
        { "city": "Tuticorin, India (V.O. Chidambaranar Port)", "temperature": 32, "speed": 18, "salinity": 37, "depth": 40 },
        { "city": "Cochin, India (Cochin Port)", "temperature": 30, "speed": 17, "salinity": 36, "depth": 35 },
        { "city": "Kolkata, India (Kolkata Port Trust)", "temperature": 33, "speed": 19, "salinity": 38, "depth": 45 }
      ],
      "totalTime": "20 hours"
    },
    {
      "src": "Kolkata, India (Kolkata Port Trust)",
      "dest": "Haldia, India (Haldia Port)",
      "intermediateCities": [
        { "city": "Bhavnagar, India (Bhavnagar Port)", "temperature": 31, "speed": 17, "salinity": 36, "depth": 32 },
        { "city": "Visakhapatnam, India (Visakhapatnam Port)", "temperature": 29, "speed": 16, "salinity": 35, "depth": 30 },
        { "city": "Haldia, India (Haldia Port)", "temperature": 32, "speed": 18, "salinity": 37, "depth": 28 }
      ],
      "totalTime": "10 hours"
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-teal-900 mb-8 ml-3">Previous Journeys</h1>
      <div className="space-y-4">
        {tripData.map((m, index) => {
          const { src, dest, intermediateCities, totalTime } = m;
          return (
            <div key={index} className="grid grid-rows-2 grid-cols-1 gap-4">
              <div className="flex gap-x-32">
                <div className="ml-28 w-10 flex-1 bg-teal-700 p-4 text-center rounded-xl">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-lg font-semibold text-teal-300">Source</h3>
                    <h2 className="text-xl font-bold text-teal-100">{src}</h2>
                  </div>
                </div>
                <div className="mr-28 flex-1 bg-teal-800 p-4 text-center rounded-xl">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-lg font-semibold text-teal-300">Destination</h3>
                    <h2 className="text-xl font-bold text-teal-100">{dest}</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="btn bg-teal-900 text-white hover:bg-teal-800"
                  onClick={() => handleMoreInfo(m)}>
                  More Info
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assessment;
