import React from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CardLastUpdatesApexchart = () => {
  const chartOptions = {
    chart: {
      type: "area",
      stacked: true,
      toolbar: { show: false },
    },
    colors: ["#A7F3D0", "#6EE7B7", "#34D399"], // warna untuk Visits, Clicks, Sales
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        "7/12", "8/12", "9/12", "10/12", "11/12", "12/12", "13/12", "14/12",
        "15/12", "16/12", "17/12", "18/12", "19/12"
      ],
      labels: { style: { colors: "#9CA3AF" } },
    },
    yaxis: {
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
  };

  const chartSeries = [
    { name: "Visits", data: [50, 60, 45, 70, 65, 80, 75, 120, 110, 90, 150, 160, 180] },
    { name: "Clicks", data: [30, 35, 25, 40, 35, 50, 45, 60, 55, 50, 70, 80, 90] },
    { name: "Sales", data: [20, 25, 15, 30, 25, 40, 35, 70, 65, 40, 90, 100, 120] },
  ];

  return (
    <Card className="shadow-sm mr-3">
      <CardHeader className="pb-0">
        <CardTitle>Last updates</CardTitle>
        <p className="text-sm text-gray-500">Commercial networks</p>
      </CardHeader>
      <CardContent>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={300}
        />
      </CardContent>
    </Card>
  );
};

export default CardLastUpdatesApexchart;
