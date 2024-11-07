import React, { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import { fetchStatistics, fetchBarChartData, fetchPieChartData } from "./api/api";

const App = () => {
  const [month, setMonth] = useState("March");

  useEffect(() => {
    fetchStatistics(month);
    fetchBarChartData(month);
    fetchPieChartData(month);
  }, [month]);

  return (
    <div>
      <h1>Transactions Dashboard</h1>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <TransactionTable month={month} />
      <BarChart month={month} />
      <PieChart month={month} />
    </div>
  );
};

export default App;
