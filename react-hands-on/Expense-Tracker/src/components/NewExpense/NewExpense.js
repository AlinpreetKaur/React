import React,{useState} from "react";

import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
 const [show, setShow] = useState(true);  
 
 
const onSaveExpensDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData)
        const data = {...enteredExpenseData, id : Math.random().toString()}
        props.onAdd(data);
        setShow(true);

}

const clickHandler = () => {
    setShow(false)
}

const onCancel = () => {
   setShow(true);
   }

if(show) {
    return <div className="new-expense">
    <button type="submit" onClick={clickHandler}>Add Expense</button>
</div>
}
    return (<div className="new-expense">{
        <ExpenseForm onCancel={onCancel} onSaveExpensData={onSaveExpensDataHandler} 
         />}
    </div>)

}


export default NewExpense;