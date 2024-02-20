import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const PercentageChart = ({ percentage }) => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance if it exists
    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Percentage"],
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: ["rgba(75, 192, 192, 1)", "rgba(0, 0, 0, 0)"],
          },
        ],
      },
      options: {
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });

    // Clean up function
    return () => {
      myChart.destroy();
    };
  }, [percentage]);

  return <canvas ref={chartRef} />;
};

export default PercentageChart;
