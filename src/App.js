import "./App.css";
import React from "react";
import Forms from "./components/Forms";
import TongQuanChiPhi from "./components/TongQuanChiPhi";
import Transactions from "./components/Transactions";

function App() {
  const [transactions, setTransactions] = React.useState([{ id: 1, monney: 100 }]);
  const typeTransitions = ["income", "expense"];
  const categories = ["salary", "food", "shopping", "entertainment"];


  return (
    <>
      <TongQuanChiPhi/>
      <Forms categories={categories} typeTransitions={typeTransitions} />
      <Transactions transactions={transactions} />
    </>
  );
}

export default App;
