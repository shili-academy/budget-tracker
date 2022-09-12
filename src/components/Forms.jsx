import React from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Textarea from "./Textarea";

const Forms = (props) => {
  return (
    <form>
      <Input type="number" placeholder="Money" />
      <Select values={props.categories} />
      <Select values={props.typeTransitions} />
      <Textarea />
      <Input type="date" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Forms;
