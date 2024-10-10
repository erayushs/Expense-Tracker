import "./App.css";
import BarC from "./components/BarC";
import Expense from "./components/Expense/Expense";
import PieC from "./components/PieC";
import TransactionList from "./components/TransactionList/TransactionList";
import Wallet from "./components/Wallet/Wallet";
import { useState, useEffect } from "react";
import ExpenseForm from "./components/Forms/ExpenseForm/ExpenseForm";
import AddBalanceForm from "./components/Forms/AddBalanceForm/AddBalanceForm";
import ModalWrapper from "./components/Modal/Modal";

const App = () => {
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // -----------------Modals---------------------------

  const [isOpenBalance, setIsOpenBalance] = useState(false);
  const [isOpenExpense, setIsOpenExpense] = useState(false);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });
  const [categoryCount, setCategoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  //------------------------------------------------------

  useEffect(() => {
    //Check localStorage
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      setBalance(Number(localBalance));
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }

    const items = JSON.parse(localStorage.getItem("expenses"));

    setExpenseList(items || []);
    setIsMounted(true);
  }, []);

  // balance (local storage saving)
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance);
    }
  }, [balance]);

  // expense (local storage saving)
  useEffect(() => {
    if (expenseList.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseList));
    }

    if (expenseList.length > 0) {
      setExpense(
        expenseList.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    let foodSpends = 0,
      entertainmentSpends = 0,
      travelSpends = 0;
    let foodCount = 0,
      entertainmentCount = 0,
      travelCount = 0;

    expenseList.forEach((item) => {
      if (item.category === "food") {
        foodSpends += Number(item.price);
        foodCount++;
      } else if (item.category === "entertainment") {
        entertainmentSpends += Number(item.price);
        entertainmentCount++;
      } else if (item.category === "travel") {
        travelSpends += Number(item.price);
        travelCount++;
      }
    });

    setCategorySpends({
      food: foodSpends,
      travel: travelSpends,
      entertainment: entertainmentSpends,
    });

    setCategoryCount({
      food: foodCount,
      travel: travelCount,
      entertainment: entertainmentCount,
    });
  }, [expenseList]);

  return (
    <div className="App">
      {/* TOP DIV COMPLETE */}
      <h1>Expense Tracker</h1>
      <div className="topDiv">
        <Wallet
          balance={balance}
          handleClick={() => {
            setIsOpenBalance(true);
          }}
        />
        <Expense
          expense={expense}
          handleClick={() => {
            setIsOpenExpense(true);
          }}
        />
        <div className="pieBox">
          <PieC
            data={[
              { name: "Food", value: categorySpends.food },
              { name: "Entertainment", value: categorySpends.entertainment },
              { name: "Travel", value: categorySpends.travel },
            ]}
          />
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
      {/* ---------------------------------------------------- */}
      {/* BOTTOM DIV COMPLETE */}
      <div className="bottomDiv">
        <div className="recentTransactionsDiv">
          <h2 className="transactionHeading1">Recent Transactions</h2>
          <div className="transactionsDiv">
            <TransactionList
              expenseList={expenseList}
              setExpenseList={setExpenseList}
              balance={balance}
              setBalance={setBalance}
            />
          </div>
        </div>

        <div className="topExpensesDiv">
          <h2 className="transactionHeading2">Top Expenses</h2>
          <div className="expensesBarGraphDiv">
            <BarC
              data={[
                { name: "Food", value: categorySpends.food },
                { name: "Entertainment", value: categorySpends.entertainment },
                { name: "Travel", value: categorySpends.travel },
              ]}
            />
          </div>
        </div>
      </div>

      <ModalWrapper isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalanceForm setIsOpen={setIsOpenBalance} setBalance={setBalance} />
      </ModalWrapper>

      <ModalWrapper isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <ExpenseForm
          setIsOpen={setIsOpenExpense} // Set if expense form is open or closed
          expenseList={expenseList} // It's an array which contains all the expenses
          setExpenseList={setExpenseList} // Setter function for expense list
          balance={balance}
          setBalance={setBalance}
        />
      </ModalWrapper>
    </div>
  );
};

export default App;
