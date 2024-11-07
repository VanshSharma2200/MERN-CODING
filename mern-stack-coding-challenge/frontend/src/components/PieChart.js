import React, { useEffect, useState } from "react";
import { fetchPieChartData } from "../api/api";

const PieChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPieChartData(month).then((res) => setData(res.data));
  }, [month]);

  return <div>{/* Render pie chart with data */}</div>;
};

export default PieChart;
