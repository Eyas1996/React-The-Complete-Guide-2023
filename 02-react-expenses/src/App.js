import React, { useState } from "react";
// import Tasks from "./Tasks";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Urlaub",
    amount: 500,
    date: new Date(2023, 7, 1),
  },
  
  {
    id: "e6",
    title: "Otto",
    amount: 2500,
    date: new Date(2023, 9, 1),
  },
  {
    id: "e7",
    title: "MasterCard",
    amount: 700,
    date: new Date(2023, 10, 1),
  },
  
  {
    id: "e8",
    title: "Kaution",
    amount: 1600,
    date: new Date(2023, 11, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <Tasks></Tasks> */}
    </div>
  );
};

export default App;
