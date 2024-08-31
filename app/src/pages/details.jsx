import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Details = () => {
  const navigate = useNavigate();
  const journeyData = JSON.parse(localStorage.getItem('journeyData'));

  if (!journeyData) {
    return <div>No journey data found</div>;
  }

  const { intermediateCities, totalTime } = journeyData;

  const data = {
    labels: intermediateCities.map((city) => city.city),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: intermediateCities.map((city) => city.temperature),
        borderColor: '#2b6cb0',
        backgroundColor: '#2b6cb0',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button
          className="btn bg-teal-900 text-white hover:bg-teal-800"
          onClick={() => {
            localStorage.removeItem('journeyData');
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
      <h1 className="text-2xl font-bold text-teal-900 mb-4">Journey Details</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-teal-800">Total Time Taken:</h2>
        <p className="text-lg text-teal-600">{totalTime}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-teal-800">Intermediate Cities Data:</h2>
        <ul className="list-disc list-inside">
          {intermediateCities.map((city, index) => (
            <li key={index} className="mb-2">
              <strong>{city.city}:</strong> Temperature: {city.temperature}°C, Speed: {city.speed} km/h, Salinity: {city.salinity} ppt, Depth: {city.depth} m
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Details;
