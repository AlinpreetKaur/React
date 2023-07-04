import React from "react";

import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
const onSaveExpensDataHandler = (enteredExpenseData) =>{
console.log(enteredExpenseData)
const data = {...enteredExpenseData, id : Math.random().toString()}
props.onAdd(data);
}
    return (<div className="new-expense">
        <ExpenseForm onSaveExpensData={onSaveExpensDataHandler} 
         />
    </div>)

}


export default NewExpense;