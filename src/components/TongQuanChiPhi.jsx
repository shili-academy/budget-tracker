import React from "react";
import SoDu from "./SoDu";
const TongQuanChiPhi = (props) => {
  
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5px",
        margin: "5px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <SoDu text="Total balance" sodu="101" />
      <SoDu text="income" sodu="700" />
      <SoDu text="expense" sodu="599" />
    </div>
  );
};

export default TongQuanChiPhi;
