import React from "react";

const Select = (props) => {
  const values = props.values.map((value, i) => (
    <option key={i} value={value}>
      {value}
    </option>
  ));

  return (
    <>
      <select>{values}</select>
    </>
  );
};

export default Select;
