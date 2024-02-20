import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Active", "Inactive"],
  [1000, 400],
  [1170, 460],
  [660, 1120],
  [1030, 540],
];

export const options = {
  chart: {
    title: "Bar Chart",
    subtitle: "Active & InActive",
  },
};

export function BarChartData() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
