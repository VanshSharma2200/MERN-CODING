import React, { useEffect, useState } from "react";
import { fetchBarChartData } from "../api/api";

const BarChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBarChartData(month).then((res) => setData(res.data));
  }, [month]);

  return <div>{/* Render chart with data */}</div>;
};

export default BarChart;
