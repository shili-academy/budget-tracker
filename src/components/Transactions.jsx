import React from "react";

const Transactions = (props) => {
  const { transactions } = { ...props };
  
  return (
    <>
      <ul>
        {transactions.map((value) => (
          <li key={value.id}>{value.monney}</li>
        ))}
      </ul>
    </>
  );
};

export default Transactions;
