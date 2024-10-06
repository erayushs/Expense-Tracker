import "./Expense.css";

const Expense = () => {
  return (
    <div className="expensesDiv">
      <h2 className="expenseh1">
        Expenses: <span className="expenseAmount">₹{500}</span>
      </h2>
      <button className="addExpense">+ Add Expense</button>
    </div>
  );
};

export default Expense;
