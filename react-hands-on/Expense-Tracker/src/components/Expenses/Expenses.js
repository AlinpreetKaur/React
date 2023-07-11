import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Cards/Cards";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  console.log(props);
  const [filterDate, setFilterDate] =  useState('');
const onSelectHandler = (data) => {
  console.log(data);
setFilterDate(data);
console.log(filterDate);
}
    return (<Card className="expenses">
      <ExpensesFilter selected={filterDate} onSelect={onSelectHandler}/>
      {props.expenses.map((expense) => <ExpenseItem
      key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      ></ExpenseItem>)}
     </Card> );
}