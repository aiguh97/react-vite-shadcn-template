// ApexHorizontalBarChart.jsx
import React from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ApexHorizontalBarChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: "60%",
      },
    },
    dataLabels: { enabled: false },
    colors: ["#06B6D4"], // biru cyan
    xaxis: {
      categories: [
        "MON, 11",
        "THU, 14",
        "FRI, 15",
        "MON, 18",
        "WED, 20",
        "FRI, 21",
        "MON, 23",
      ],
      labels: { style: { colors: "#9CA3AF" } },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
  };

  const chartSeries = [
    {
      name: "Balance",
      data: [750, 350, 500, 650, 200, 600, 150],
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <div>
          <CardTitle>Balance</CardTitle>
          <div className="text-gray-500 text-sm">$74,382.72</div>
        </div>
        <Calendar className="w-5 h-5 text-gray-400" />
      </CardHeader>
      <CardContent>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={320}
        />
      </CardContent>
    </Card>
  );
};

export default ApexHorizontalBarChart;
