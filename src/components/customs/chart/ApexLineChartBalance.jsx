// ApexLineChartBalance.jsx
import React from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const ApexLineChartBalance = () => {
  const chartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "straight",
      width: 5,
    },
    colors: ["#FBBF24"], // warna garis (kuning-oranye)
    xaxis: {
      categories: [
        "7/12", "8/12", "9/12", "10/12", "11/12",
        "12/12", "13/12", "14/12", "15/12", "16/12",
        "17/12", "18/12", "19/12", "20/12", "21/12"
      ],
      labels: { style: { colors: "#9CA3AF" } }
    },
    yaxis: {
      min: 0,
      max: 300,
      labels: { style: { colors: "#9CA3AF" } }
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`
      }
    }
  };

  const chartSeries = [
    {
      name: "Balance",
      data: [270, 200, 220, 180, 270, 250, 60, 90, 200, 150, 160, 120, 150, 100, 50]
    }
  ];

  return (
    <Card className="shadow-sm  mb-3 mr-3">
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <div>
          <CardTitle>Balance</CardTitle>
          <CardDescription>Commercial networks & enterprises</CardDescription>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">$ 100,000</div>
          <div className="text-red-500 text-sm">▼ 20%</div>
        </div>
      </CardHeader>
      <CardContent>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={320}
        />
      </CardContent>
    </Card>
  );
};

export default ApexLineChartBalance;
