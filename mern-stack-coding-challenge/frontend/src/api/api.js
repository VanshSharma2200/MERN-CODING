import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/transactions" });

export const fetchTransactions = (params) => API.get("/transactions", { params });
export const fetchStatistics = (month) => API.get(`/statistics?month=${month}`);
export const fetchBarChartData = (month) => API.get(`/barchart?month=${month}`);
export const fetchPieChartData = (month) => API.get(`/piechart?month=${month}`);
