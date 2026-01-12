// ApexDonutChart.jsx
import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const ApexDonutChart = () => {
  const series = useMemo(() => [42, 7, 25, 25], []);

  const options = useMemo(
    () => ({
      chart: {
        type: "donut",
      },
      labels: ["Operational", "Networking", "Hiring", "R&D"],
      colors: ["#facc15", "#3b82f6", "#8b5cf6", "#2dd4bf"],
      dataLabels: {
        enabled: true,
        formatter: (val) => `${parseInt(val)}%`,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      legend: {
        position: "bottom",
        labels: {
          colors: "#6b7280",
        },
        markers: {
          radius: 12,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: -10,
                color: "#6b7280",
                fontSize: "16px",
              },
              value: {
                show: true,
                fontSize: "22px",
                fontWeight: "bold",
                formatter: (val) => `${parseInt(val)}%`,
              },
              total: {
                show: true,
                label: "Operational",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#374151",
                formatter: () => "42%",
              },
            },
          },
        },
      },
      stroke: {
        width: 0,
      },
    }),
    []
  );

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Expense Ratio</CardTitle>
        <CardDescription>Spending on various categories</CardDescription>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="donut" height={320} />
      </CardContent>
    </Card>
  );
};

export default ApexDonutChart;
