import "./Expense.css";
import { useState } from "react";

const Expense = ({ expense, onAddExpense }) => {
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleExpense = () => {
    onAddExpense(expenseAmount);
    setExpenseAmount("");
  };

  return (
    <div className="expensesDiv">
      <h2 className="expenseh1">
        Expenses: <span className="expenseAmount">₹{expense}</span>
      </h2>
      <input
        type="text"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
      />
      <button onClick={handleExpense} className="addExpense">
        + Add Expense
      </button>
    </div>
  );
};

export default Expense;
