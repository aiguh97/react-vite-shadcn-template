// StatistikChartJS.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatistikChartJS = () => {
  const labels = Array.from({ length: 141 }, (_, i) => i);

  const data = {
    labels,
    datasets: [
      {
        label: "Europe",
        data: [
          90, 110, 140, 160, 190, 220, 260, 270, 260, 250, 230, 200, 180, 160, 150,
          170, 190, 220, 250, 270, 260, 250, 240, 250, 270, 300, 320, 340, 360, 370, 380, 390
        ],
        borderColor: "#ef4444",
        fill: false,
        tension: 0.5,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Asia",
        data: [
          90, 100, 110, 120, 130, 140, 150, 160, 180, 200, 220, 210, 200, 180, 170,
          160, 170, 180, 200, 220, 240, 250, 260, 280, 300, 290, 280, 270, 260, 250, 240, 230
        ],
        borderColor: "#3b82f6",
        fill: false,
        tension: 0.5,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Africa",
        data: [
          85, 90, 95, 100, 95, 90, 100, 110, 120, 115, 110, 105, 100, 110, 120,
          130, 140, 135, 130, 140, 150, 160, 150, 140, 145, 150, 155, 160, 165, 170, 175, 170
        ],
        borderColor: "#facc15",
        fill: false,
        tension: 0.5,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      tooltip: {
        enabled: false, // matikan tooltip
      },
    },
    scales: {
      y: {
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100, // tampil 0, 100, 200, 300, 400
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        ticks: {
          stepSize: 20, // tampil 0, 20, 40, 60, 80, 100, 120, 140
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>
            Commercial networks and enterprises
          </CardDescription>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">$ 78,000</p>
          <span className="text-green-500 text-sm font-medium">↑ 37%</span>
        </div>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} height={100} />
      </CardContent>
    </Card>
  );
};

export default StatistikChartJS;
