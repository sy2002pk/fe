import React, { useState } from 'react';
import SensorCard from './components/SensorCard';
import ControlCard from './components/ControlCard';
import Dothi from './components/Dothi';
import DoThiCot from './components/DoThiCot';
function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-100">
      <header className="py-6 text-center text-white bg-blue-600">
        <h1 className="text-2xl font-bold">Hệ thống giám sát trong nông nghiệp thông minh</h1>
      </header>

      <main className="p-4 space-y-6">
        {/* Thông số nhà kính */}
        <SensorCard />
        <DoThiCot/>
        <Dothi/>
        {/* Tùy chỉnh chế độ */}
        <ControlCard
          title="Tùy chỉnh chế độ"
          controls={[
            { label: 'Chỉnh tay', stateId: 'state1' },
            { label: 'Tự động', stateId: 'state2' },
          ]}
        />

        {/* Chế độ chỉnh tay */}
        <ControlCard
          title="Chế độ chỉnh tay"
          controls={[
            { label: 'Bơm', stateId: 'state1' },
            { label: 'Đèn', stateId: 'state3' },
            { label: 'Quạt hút', stateId: 'state4' },
            { label: 'Quạt thổi', stateId: 'state5' },
            { label: 'Lưới che', stateId: 'state6' },
            { label: 'Sò lạnh', stateId: 'state7' },
          ]}
        />
      </main>
    </div>
  );
}

export default App;
