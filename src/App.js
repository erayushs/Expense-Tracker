import "./App.css";
import Expense from "./components/Expense/Expense";
import PieC from "./components/PieC";
import Wallet from "./components/Wallet/Wallet";

const App = () => {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {/* TOP DIV COMPLETE */}
      <div className="topDiv">
        <Wallet />
        <Expense />
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
    </div>
  );
};

export default App;
