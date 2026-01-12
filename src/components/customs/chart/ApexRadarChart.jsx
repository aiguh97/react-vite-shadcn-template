// ApexRadarChart.jsx
import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ApexRadarChart = () => {
  const series = useMemo(
    () => [
      {
        name: "iPhone 12",
        data: [80, 50, 30, 40, 100, 20, 80],
      },
      {
        name: "Samsung s20",
        data: [20, 30, 40, 80, 20, 80, 50],
      },
    ],
    []
  );

  const options = useMemo(
    () => ({
      chart: {
        type: "radar",
        toolbar: { show: false },
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.5,
        colors: ["#facc15", "#8b5cf6"],
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: [
          "Battery",
          "Brand",
          "Camera",
          "Memory",
          "Storage",
          "Display",
          "OS",
          "Price",
        ],
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "12px",
          },
        },
      },
      colors: ["#facc15", "#8b5cf6"],
      legend: {
        position: "bottom",
        markers: {
          radius: 12,
        },
        labels: {
          colors: "#6b7280",
        },
      },
      grid: {
        show: true,
        yaxis: {
          lines: {
            show: false, // matikan garis horizontal
          },
        },
        xaxis: {
          lines: {
            show: true, // biarkan garis sumbu radar
          },
        },
      },
      yaxis: {
        show: false,
      },
    }),
    []
  );

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-0">
        <CardTitle>Mobile Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="radar" height={320} />
      </CardContent>
    </Card>
  );
};

export default ApexRadarChart;
