import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function Expense(props) {
  return (
    <div>
      {
        props.items.map((item)=>(
          <ExpenseItem key={item.id} date={item.date.toLocaleString()} title={item.title} amount={item.amount} />
        ))
      }
    </div>
  )
}
