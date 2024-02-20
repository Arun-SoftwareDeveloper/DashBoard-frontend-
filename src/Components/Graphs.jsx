import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function getRandomValues(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

function Graphs() {
  const [barChartData, setBarChartData] = useState({});

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await axios.get(
          "https://dashboard-backend-rst2.onrender.com/getbarChartData"
        );
        setBarChartData(response.data);
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchBarChartData();
  }, []);

  const deviceChartOptions = {
    series: [
      {
        name: "Linux",
        data: barChartData.device || [44],
      },
      {
        name: "Windows",
        data: barChartData.device || [81],
      },
      {
        name: "OS",
        data: barChartData.device || [12],
      },
      {
        name: "AWS",
        data: barChartData.device || [99],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    title: {
      text: "Compare Sales Strategy",
    },
    xaxis: {
      categories: ["Linux", "Windows", "Apex", "OS", "AWS"],
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        style: ["circles", "slantedLines", "verticalLines", "horizontalLines"],
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
  };

  const locationChartOptions = {
    series: barChartData.location || getRandomValues(5), // Change '5' to the desired number of values
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: "Gradient Donut with custom Start-angle",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4" style={{ marginRight: "270px" }}>
          <h5>
            <b>Traffic by Device</b>
          </h5>
          <Chart
            options={deviceChartOptions}
            series={deviceChartOptions.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="col-md-4" style={{ marginTop: "40px" }}>
          <h5>
            <b>Traffic by Location</b>
          </h5>
          <Chart
            options={locationChartOptions}
            series={locationChartOptions.series}
            type="donut"
            width={380}
          />
        </div>
      </div>
    </div>
  );
}

export default Graphs;
