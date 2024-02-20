import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import { BarChartData } from "./barChartData";

function StockCart() {
  const [options, setOptions] = useState({
    series: [
      {
        name: "Total Users",
        data: [],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Total Users",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      min: 0,
      max: 3,
    },
  });

  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    // Fetch line chart data from backend
    const fetchLineChartData = async () => {
      try {
        const responseLineChart = await axios.get(
          "http://localhost:4000/getlinechartdata"
        );
        const { series, categories } = responseLineChart.data;
        setOptions((prevOptions) => ({
          ...prevOptions,
          series: [
            {
              ...prevOptions.series[0],
              data: series[0].data,
            },
          ],
          xaxis: {
            ...prevOptions.xaxis,
            categories: categories,
          },
        }));
      } catch (error) {
        console.error("Error fetching line chart data:", error);
      }
    };

    fetchLineChartData();
  }, []);

  useEffect(() => {
    // Fetch rating data from backend
    const fetchRatingData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getrating");
        setRatingData(response.data);
      } catch (error) {
        console.error("Error fetching rating data:", error);
      }
    };

    fetchRatingData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <ApexCharts options={options} series={options.series} type="line" />
        </div>
        <div className="col-md-4">
          <BarChartData />
        </div>
      </div>
    </div>
  );
}

export default StockCart;
