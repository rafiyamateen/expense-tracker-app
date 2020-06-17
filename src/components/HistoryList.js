import React, { useContext } from 'react';
import {TrackerContext} from '../context/TrackerState';
import {Transaction} from './Transaction';

export const HistoryList = () => {
    const {transactions}=useContext(TrackerContext);
    return (
        <div className='history'>
            <h2>History</h2>
            <p>(Positive-Income, Negative-Expense)</p>
                <hr />
            <ul>
                {
                    transactions.map(transaction=>(<Transaction transaction={transaction} key={transaction.id}></Transaction>))
                }
            </ul>
        </div>
    )
}
