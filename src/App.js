import "./App.css";
import BarC from "./components/BarC";
import Expense from "./components/Expense/Expense";
import PieC from "./components/PieC";
import Wallet from "./components/Wallet/Wallet";
import { useState } from "react";

const App = () => {
  const [balance, setBalance] = useState(4000);
  const [expense, SetExpense] = useState(0);

  const handleAddExpense = (expenseAmount) => {
    if (expenseAmount <= balance) {
      setBalance(balance - expenseAmount);
      SetExpense(expense + expenseAmount);
    } else {
      alert("Insufficient balance in wallet");
    }
  };

  return (
    <div className="App">
      {/* TOP DIV COMPLETE */}
      <h1>Expense Tracker</h1>
      <div className="topDiv">
        <Wallet balance={balance} />
        <Expense expense={expense} onAddExpense={handleAddExpense} />
        <div className="pieBox">
          <PieC />
          {/* PIE CATEGORY COLOR BOXES */}
          <div className="pieSmallBoxes">
            <div className="colorDiv">
              <div
                style={{ backgroundColor: "#A000FF" }}
                className="smallBox purpleDiv foodDiv"
              ></div>
              <p>Food</p>
            </div>
            <div className="colorDiv">
              <div
                style={{ backgroundColor: "#FF9304" }}
                className="smallBox orangeDiv EntertainmentDiv"
              ></div>
              <p>Entertainment</p>
            </div>
            <div className="colorDiv ">
              <div
                style={{ backgroundColor: "#FDE006" }}
                className="smallBox yellowDiv TravelDiv"
              ></div>
              <p>Travel</p>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM DIV COMPLETE */}
      <div className="bottomDiv">
        <div className="recentTransactionsDiv">
          <h2 className="transactionHeading1">Recent Transactions</h2>
          <div className="transactionsDiv"></div>
        </div>

        <div className="topExpensesDiv">
          <h2 className="transactionHeading2">Top Expenses</h2>
          <div className="expensesBarGraphDiv">
            <BarC />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
