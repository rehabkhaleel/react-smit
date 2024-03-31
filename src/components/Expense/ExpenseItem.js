import React from 'react'
import Card from '../UI/Card'
import './expenseItem.css'

export default function ExpenseItem(props) {
  return (
    <div>
        <Card>
            <p>{props.date}</p>
            <h3 className='title'>{props.title} : {props.amount}</h3>
        </Card>
    </div>
  )
}
