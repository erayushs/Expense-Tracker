import { useState } from "react";
import "./Wallet.css";
import Expense from "../Expense/Expense";

const Wallet = ({ balance }) => {
  return (
    <div className="walletDiv">
      <h2 className="walleth1">
        Wallet Balance: <span className="walletAmount">₹{balance}</span>
      </h2>
      <button className="addIncome">+ Add Income</button>
    </div>
  );
};

export default Wallet;
