// ApexScatterChart.jsx
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ApexScatterChart = () => {
  const [filter, setFilter] = useState("daily");

  const chartOptions = {
    chart: {
      type: "scatter",
      zoom: { enabled: true, type: "xy" }, // Zoom dengan mouse
      toolbar: { show: false }, // Toolbar untuk reset zoom, dll
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: { show: true },
      y: { show: true },
    },
    colors: ["#FBBF24", "#60A5FA", "#34D399"], // Angular, Vue, React
    xaxis: {
      tickAmount: 10,
      labels: { style: { colors: "#9CA3AF" } },
    },
    yaxis: {
      max: 400,
      labels: { style: { colors: "#9CA3AF" } },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: { colors: "#6B7280" },
    },
    markers: { size: 6 },
  };

  const seriesData = {
    daily: [
      {
        name: "Angular",
        data: [
          [5.4, 170], [5.5, 180], [5.7, 100], [5.9, 150], [6.3, 200],
          [6.5, 140], [6.8, 170], [7.1, 220], [8.0, 110], [9.5, 190],
          [10.1, 210], [11.5, 170], [12.0, 220]
        ]
      },
      {
        name: "Vue",
        data: [
          [13.5, 210], [14.2, 280], [15.5, 230], [16.8, 270], [17.0, 300],
          [17.5, 120], [18.0, 240], [18.5, 290], [19.0, 320], [20.5, 300]
        ]
      },
      {
        name: "React",
        data: [
          [13.0, 190], [13.8, 260], [18.5, 400], [19.2, 200], [19.5, 220],
          [19.8, 310], [20.0, 280], [21.0, 90], [21.5, 230], [22.0, 150]
        ]
      }
    ],
    monthly: [
      {
        name: "Angular",
        data: [[5.4, 200], [8.0, 150], [10.1, 250], [12.0, 300]]
      },
      {
        name: "Vue",
        data: [[14.2, 280], [16.8, 310], [18.5, 330], [20.5, 360]]
      },
      {
        name: "React",
        data: [[13.8, 260], [18.5, 400], [20.0, 320], [22.0, 180]]
      }
    ],
    yearly: [
      {
        name: "Angular",
        data: [[6.0, 250], [12.0, 350]]
      },
      {
        name: "Vue",
        data: [[15.0, 320], [20.0, 380]]
      },
      {
        name: "React",
        data: [[18.0, 400], [21.0, 300]]
      }
    ]
  };

  return (
    <Card className="shadow-sm my-3 mr-3">
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <CardTitle>New Technologies Data</CardTitle>
        <div className="flex gap-2">
          <Button
            variant={filter === "daily" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilter("daily")}
          >
            Daily
          </Button>
          <Button
            variant={filter === "monthly" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilter("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={filter === "yearly" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilter("yearly")}
          >
            Yearly
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Chart
          options={chartOptions}
          series={seriesData[filter]}
          type="scatter"
          height={320}
        />
      </CardContent>
    </Card>
  );
};

export default ApexScatterChart;
