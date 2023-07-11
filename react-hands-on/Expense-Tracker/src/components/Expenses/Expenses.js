import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Cards/Cards";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {

  const [filterDate, setFilterDate] =  useState('2020');

const onSelectHandler = (data) => {
setFilterDate(data);
}
const filteredItems = props.expenses.filter((e)=> (e.date.getFullYear().toString()===filterDate))


    return (<Card className="expenses">
      <ExpensesFilter selected={filterDate} onSelect={onSelectHandler}/>
     <ExpenseChart expenses={filteredItems} />
     <ExpensesList expenses={filteredItems}/>
     </Card> );
}