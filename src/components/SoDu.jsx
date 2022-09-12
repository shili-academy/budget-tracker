import React from "react";

const SoDu = (props) => {
  return (
    <div style={{  display: 'inline-block'}}>
        <h3>{props.text}</h3>
        <p>{props.sodu}</p>
    </div>
  );
};

export default SoDu;
