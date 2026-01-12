import ApexCandleStickChart from "@/components/customs/chart/ApexCandleStickChart";
import ApexDonutChart from "@/components/customs/chart/ApexDonutChart";
import ApexHorizontalBarChart from "@/components/customs/chart/ApexHorizontalBarChart";
import ApexLineChartBalance from "@/components/customs/chart/ApexLineChartBalance";
import ApexRadarChart from "@/components/customs/chart/ApexRadarChart";
import ApexScatterChart from "@/components/customs/chart/ApexScatterChart";
import CardLastUpdatesApexchart from "@/components/customs/chart/CardLastUpdatesApexchart";
import React from "react";

const ApexchartPage = () => {
  return (
    <div className="p-4">
      <CardLastUpdatesApexchart />
      <ApexScatterChart />
      <ApexLineChartBalance />
      <div className="flex flex-row gap-3 mr-3 my-4">
        <div className="flex-1">
          <ApexHorizontalBarChart />
        </div>
        <div className="flex-1">
          <ApexCandleStickChart />
        </div>
      </div>
      <div className="flex flex-row gap-4 mr-3 my-4">
        <div className="flex-1">
          <ApexRadarChart />
        </div>
        <div className="flex-1">
          <ApexDonutChart />
        </div>
      </div>
    </div>
  );
};

export default ApexchartPage;
