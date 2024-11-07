import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../api/api";

const TransactionTable = ({ month }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions({ month }).then((res) => setTransactions(res.data));
  }, [month]);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Date of Sale</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction._id}>
            <td>{transaction.title}</td>
            <td>{transaction.description}</td>
            <td>{transaction.price}</td>
            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
            <td>{transaction.sold ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
