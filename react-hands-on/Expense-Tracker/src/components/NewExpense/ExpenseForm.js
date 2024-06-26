import React,{useState} from "react";
import './ExpenseForm.css';

  const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // const inputChangeHandler = (type, value) => {
    //     if(type  === 'title') {
    //         setEnteredTitle(value);
    //     } else if(type  === 'amount') {
    //         setEnteredAmount(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }

    const submitHandler = (event) => {
event.preventDefault();
const expenseData = {
    title : enteredTitle, amount:+enteredAmount, date: new Date(enteredDate)
}
console.log(expenseData);
setEnteredAmount('');
setEnteredTitle('');
setEnteredDate('');
props.onSaveExpensData(expenseData);
    }

    const cancelHandler = (e) => {
        e.preventDefault();
        props.onCancel();
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"  value={enteredDate}  min="2019-01-01" max="2023-12-31" onChange={DateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={cancelHandler}>Cancel</button>
             <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm;