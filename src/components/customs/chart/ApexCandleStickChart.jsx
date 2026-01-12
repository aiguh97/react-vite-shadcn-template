// ApexCandleStickChart.jsx
import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ApexCandleStickChart = () => {
  // sample data: setiap item { x: timestamp, y: [open, high, low, close] }
const series = useMemo(
  () => [
    {
      data: [
        { x: new Date("2023-10-01").getTime(), y: [150, 170, 50, 100] },  // merah (open > close)
        { x: new Date("2023-10-02").getTime(), y: [100, 180, 90, 150] },  // hijau
        { x: new Date("2023-10-03").getTime(), y: [300, 330, 200, 320] }, // merah
        { x: new Date("2023-10-04").getTime(), y: [200, 330, 120, 320] }, // hijau
        { x: new Date("2023-10-05").getTime(), y: [320, 420, 110, 250] }, // merah
        { x: new Date("2023-10-06").getTime(), y: [90, 180, 50, 120] },   // hijau
        { x: new Date("2023-10-07").getTime(), y: [220, 280, 200, 210] }, // merah
        { x: new Date("2023-10-08").getTime(), y: [150, 220, 120, 200] }, // hijau
        { x: new Date("2023-10-09").getTime(), y: [400, 480, 250, 460] }, // merah
        { x: new Date("2023-10-10").getTime(), y: [300, 460, 280, 420] }, // hijau
      ],
    },
  ],
  []
);


  // pilih titik tengah untuk annotation (agar langsung terlihat seperti screenshot)
  const annotationX = useMemo(() => {
    const items = series[0].data;
    const mid = Math.floor(items.length / 2);
    return items[mid].x;
  }, [series]);

  const options = useMemo(
    () => ({
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: { show: false }, // sembunyikan toolbar
        zoom: { enabled: false },
        animations: { enabled: true },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#22c55e", // hijau (up)
            downward: "#ef4444", // merah (down)
          },
          wick: {
            useFillColor: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: { colors: "#9ca3af", fontSize: "12px" },
        },
        axisBorder: { show: false },
        axisTicks: { show: true, color: "#e6e6e6" },
      },
      yaxis: {
        labels: { style: { colors: "#9ca3af", fontSize: "12px" } },
      },
      grid: {
        borderColor: "#f3f4f6",
        strokeDashArray: 4,
      },
      tooltip: {
        enabled: true,
        shared: false,
        followCursor: true,
        x: {
          show: true,
          format: "dd MMM",
        },
        // Untuk candlestick Apex sudah menampilkan OHLC, tapi kita format isi tooltip agar rapi
        y: {
          formatter: (val, { seriesIndex, dataPointIndex, w }) => {
            // val here is last number; we'll fetch full OHLC from series data
            try {
              const dp = w.config.series[seriesIndex].data[dataPointIndex].y;
              if (Array.isArray(dp)) {
                return `Open: ${dp[0]}<br/>High: ${dp[1]}<br/>Low: ${dp[2]}<br/>Close: ${dp[3]}`;
              }
            } catch (e) {}
            return String(val);
          },
        },
        style: {
          fontSize: "13px",
        },
      },
      annotations: {
        xaxis: [
          {
            x: annotationX,
            borderColor: "#9ca3af",
            strokeDashArray: 4,
            // label shows the date under the vertical line (white box similar screenshot)
            label: {
              borderColor: "#9ca3af",
              style: {
                color: "#111827",
                background: "#ffffff",
                fontSize: "12px",
              },
              offsetY: 10,
              text: new Date(annotationX).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
              }),
            },
          },
        ],
      },
    }),
    [annotationX]
  );

  return (
    <Card className="shadow-sm relative">
      <CardHeader className="flex items-start justify-between pb-0">
        <div>
          <CardTitle>Stocks Prices</CardTitle>
          <div className="text-gray-500 text-sm mt-1">$50,863.98</div>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          {/* placeholder caret like screenshot */}
          <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 9l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </CardHeader>

      <CardContent>
        <Chart options={options} series={series} type="candlestick" height={360} />
      </CardContent>

    </Card>
  );
};

export default ApexCandleStickChart;
