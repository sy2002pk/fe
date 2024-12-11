import React from 'react';
import temperature from '../assets/temperature.png';
import humidity from '../assets/humidity.png';
import TreAndSoil from '../assets/TreeAndSoil.png';
import CO2 from '../assets/CO2.png';
import Lux from '../assets/Lux.png';
import PH from '../assets/PH.png';

const sensors = [
  { id: 'sensor1', label: 'Nhiệt độ', img: temperature },
  { id: 'sensor2', label: 'Độ ẩm không khí', img: humidity },
  { id: 'sensor3', label: 'Độ ẩm đất', img: TreAndSoil },
  { id: 'sensor4', label: 'Nồng độ CO2', img: CO2 },
  { id: 'sensor5', label: 'Ánh sáng', img: Lux },
  { id: 'sensor6', label: 'PH', img: PH },
];

const SensorCard = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="mb-4 text-xl font-semibold">Thông số nhà kính</h2>

      <div className="grid grid-cols-3 gap-4">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img src={sensor.img} alt={sensor.label} className="w-16 h-16 mb-2" />
            <p className="text-center">{sensor.label}: <span id={sensor.id} className="font-bold">0</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorCard;
