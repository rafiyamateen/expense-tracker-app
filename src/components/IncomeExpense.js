import React, { useContext } from 'react'
import { TrackerContext } from '../context/TrackerState';

export const IncomeExpense = () => {
    const { transactions } = useContext(TrackerContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((accumulator, item) => (accumulator += item), 0);
    const expense = (amounts.filter(item => item < 0).reduce((accumulator, item) => (accumulator += item), 0) * -1);
    return (
        <div className="inc-exp">
            <div className='inc-div'>
                <h3>Income</h3>
                <h3 className="income">Rs. {income}</h3>
            </div>
            <div>
                <h3>Expense</h3>
                <h3 className="expense">Rs. {expense}</h3>
            </div>
        </div>
    )
}
