import "./Expense.css";

const Expense = ({ expense, handleClick }) => {
  return (
    <div className="expensesDiv">
      <h2 className="expenseh1">
        Expenses: <span className="expenseAmount">₹{expense}</span>
      </h2>

      <button onClick={handleClick} className="addExpense">
        + Add Expense
      </button>
    </div>
  );
};

export default Expense;
