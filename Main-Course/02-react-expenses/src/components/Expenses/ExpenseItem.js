import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <ExpenseTitle title={props.title} />
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
