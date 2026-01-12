// src/pages/Dashboard.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";
import Chart from "react-apexcharts";
import prizeLight from "../assets/images/prize-light.png";
import walletInfo from "../assets/images/wallet-info.png";
import transactionInfo from "../assets/images/cc-primary.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DashboardPage() {
  const visitorsChart = {
    series: [{ name: "Visitors", data: [40, 60, 55, 70, 50, 65, 60] }],
    options: {
      chart: {
        type: "bar",
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      plotOptions: { bar: { columnWidth: "40%", borderRadius: 4 } },
      colors: ["#818cf8", "#a5b4fc"],
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
        labels: { show: false },
      },
      yaxis: { show: false },
      grid: { show: false },
    },
  };

  const activityChart = {
    series: [{ name: "Activity", data: [20, 22, 18, 25, 23, 19, 20] }],
    options: {
      chart: {
        type: "line",
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      stroke: { curve: "smooth", width: 3 },
      colors: ["#22c55e"],
      xaxis: {
        categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        labels: { show: false },
      },
      yaxis: { show: false },
      grid: { show: false },
    },
  };

  const profitChart = {
    series: [{ name: "Profit", data: [15, 25, 18, 30] }],
    options: {
      chart: {
        type: "bar",
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      plotOptions: { bar: { columnWidth: "50%", borderRadius: 4 } },
      colors: ["#22c55e"],
      grid: { show: false },
      xaxis: {
        categories: ["Jan", "Apr", "Jul", "Oct"],
        labels: { show: false },
      },
    },
  };

  const incomeChart = {
    series: [{ name: "Income", data: [3, 4, 5, 3, 2, 1, 1, 2, 4, 5, 5, 5] }],
    options: {
      chart: { type: "area", toolbar: { show: false } },
      stroke: { curve: "smooth", width: 2 },
      dataLabels: { enabled: false },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      colors: ["#6366F1"],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: { style: { colors: "#9ca3af" } },
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val}k`,
          style: { colors: "#9ca3af" },
        },
      },
      grid: { borderColor: "#f3f4f6" },
    },
  };

  return (
    <div className="p-6 py-6">
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {/* Congratulations Card */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-lg font-semibold">Congratulations Teguh! 🎉</p>
              <p className="text-gray-500 text-sm">Best seller of the month</p>
              <p className="text-indigo-600 font-bold text-2xl mt-2">$48.9k</p>
              <p className="text-gray-500 text-sm">78% of target 🚀</p>
              <Button className="mt-3 text-white bg-indigo-500 hover:bg-indigo-600">
                View sales
              </Button>
            </div>
            <img src={prizeLight} alt="trophy" className="w-28" />
          </CardContent>
        </Card>

        {/* Visitors */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-gray-500 text-sm">New Visitors</p>
            <p className="text-2xl font-bold">23%</p>
            <p className="text-red-500 flex items-center text-sm">
              <ArrowDown size={14} className="mr-1" /> -13.24%
            </p>
            <Chart
              options={visitorsChart.options}
              series={visitorsChart.series}
              type="bar"
              height={99}
            />
          </CardContent>
        </Card>

        {/* Activity */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-500 text-sm">Activity</p>
                <p className="text-2xl font-bold">82%</p>
                <p className="text-green-500 flex items-center text-sm">
                  <ArrowUp size={14} className="mr-1" /> +24.8%
                </p>
              </div>
              <div className="lg:max-h-[100px] md:max-h-[66px] w-full flex items-end mt-5 overflow-hidden">
                <Chart
                  options={activityChart.options}
                  series={activityChart.series}
                  type="line"
                  height={window.innerWidth >= 1024 ? 100 : 66}
                  width="100%"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Baris ke 2*/}
      <div
        className="flex lg:flex-row flex-col gap-3 mt-6"
        style={{ width: "100%" }}
      >
        <div className="grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 lg:max-w-[40%]">
          {/* Sales */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div
                style={{
                  minHeight: "133px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ height: "25%" }}>
                  <img
                    src={walletInfo}
                    alt="trophy"
                    // className="w-28"
                  />
                </div>
                <div
                  style={{
                    marginTop: 9,
                    height: "81px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="text-gray-500 text-sm">Sales</p>
                  <p className="text-2xl font-bold">$4,679</p>
                  <p className="text-green-500 flex items-center text-sm">
                    <ArrowUp size={14} className="mr-1" /> +28.42%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profit */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="text-gray-500 text-sm">Profit</p>
              <p className="text-2xl font-bold">624k</p>
              <Chart
                options={profitChart.options}
                series={profitChart.series}
                type="bar"
                height={80}
              />
            </CardContent>
          </Card>

          {/* Expenses */}
          <Card className="shadow-sm">
            <CardContent className="p-6 flex flex-col items-center">
              <p className="text-gray-500 text-sm mb-3">Expenses</p>
              <div className="w-28 h-14">
                {" "}
                {/* width lebih besar dari height untuk half circle */}
                <CircularProgressbar
                  value={78}
                  text={`78%`}
                  circleRatio={0.5} // Bikin cuma setengah lingkaran
                  styles={buildStyles({
                    rotation: 0.75, // Mulai dari kiri bawah ke kanan bawah
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathColor: "#6366f1", // Warna progress
                    textColor: "#000",
                    trailColor: "#e5e7eb", // Warna background
                  })}
                />
              </div>

              <p className="text-gray-500 text-sm mt-3 text-center">
                $21k Expenses more than last month
              </p>
            </CardContent>
          </Card>

          {/* Transactions */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div
                style={{
                  minHeight: "133px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ height: "25%" }}>
                  <img
                    src={transactionInfo}
                    alt="trophy"
                    // className="w-28"
                  />
                </div>
                <div
                  style={{
                    marginTop: 9,
                    height: "81px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="text-gray-500 text-sm">Transactions</p>
                  <p className="text-2xl font-bold">$14,857</p>
                  <p className="text-green-500 flex items-center text-sm">
                    <ArrowUp size={14} className="mr-1" /> +28.14%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className=" flex-1 lg:max-w-[58%]">
          <Card className="lg:col-span-2 shadow-sm ">
            <CardHeader className="pb-0">
              <CardTitle>Total Income</CardTitle>
              <p className="text-sm text-gray-500">Yearly report overview</p>
            </CardHeader>
            <CardContent>
              <Chart
                options={incomeChart.options}
                series={incomeChart.series}
                type="area"
                height={250}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
