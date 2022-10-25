import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    isAddBtnHandler();
  };

  const isAddBtnHandler = () => setIsAddBtnClicked(!isAddBtnClicked);

  return (
    <div className="new-expense">
      {isAddBtnClicked && (
        <button onClick={isAddBtnHandler}>Add New Expense</button>
      )}
      {!isAddBtnClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          isAddBtnHandler={isAddBtnHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
