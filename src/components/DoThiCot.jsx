import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DoThiCot = () => {
  // Dữ liệu đồ thị
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales 2023 (USD)",
        data: [300, 500, 400, 700, 600, 800],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Màu cột
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Cấu hình đồ thị
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data - 2023",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-center">Bar Chart Example</h1>
      <div className="p-4 bg-white rounded-lg shadow">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DoThiCot;
