import React, {useState} from 'react'

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const expenseAmount = props.amount


  const clickHandler = () =>{
    setTitle('updated')
    console.log('I am clicked')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expenseAmount}$</div>
      </div>
      <button onClick = {clickHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
