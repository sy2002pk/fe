import React, { useState } from 'react';

const ControlCard = ({ title, controls }) => {
  const [states, setStates] = useState(
    controls.reduce((acc, control) => ({ ...acc, [control.stateId]: 'OFF' }), {})
  );

  const toggleState = (stateId) => {
    setStates((prev) => ({
      ...prev,
      [stateId]: prev[stateId] === 'OFF' ? 'ON' : 'OFF',
    }));
  };

  return (
    <div className="p-6 m-auto bg-white shadow-lg rounded-xl lg:w-1/2">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>

      <div className="space-y-4">
        {controls.map((control, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <p className="text-lg">{control.label}: <span className="font-bold">{states[control.stateId]}</span></p>
            <button 
              onClick={() => toggleState(control.stateId)} 
              className={`py-2 px-4 rounded-lg font-semibold transition ${
                states[control.stateId] === 'OFF' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-green-500 text-white'
              }`}
            >
              {states[control.stateId] === 'OFF' ? 'Bật' : 'Tắt'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlCard;
