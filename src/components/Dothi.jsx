import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dothi = () => {
  // Dữ liệu đồ thị
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales 2023",
        data: [300, 500, 400, 700, 600, 800],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Sales 2024",
        data: [400, 600, 550, 900, 750, 850],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Profits",
        data: [200, 300, 400, 500, 600, 700],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales and Profits Data",
      },
    },
  };

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center">Dashboard</h1>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-3 text-xl font-semibold">Line Chart</h2>
        <Line data={data} options={options} />
      </div>
      <div className="p-4 mt-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-3 text-xl font-semibold">Bar Chart</h2>
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default Dothi;
