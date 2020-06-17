import React, { useContext } from 'react';
import { TrackerContext } from '../context/TrackerState';
import { Transaction } from './Transaction';

export const HistoryList = () => {
    const { transactions } = useContext(TrackerContext);
    const historyDisplay = () => {
        if (document.getElementsByTagName('ul')[0].style.display === '') {
            document.getElementsByTagName('ul')[0].style.display = 'none';
        }
        else {
            document.getElementsByTagName('ul')[0].style.display = '';
        }
    }
    return (
        <div className='history'>
            <button className='his-btn' onClick={historyDisplay}></button>
            <h2>History</h2>
            <p>(Positive-Income, Negative-Expense)</p>
            <hr />
            <ul>
                {
                    transactions.map(transaction => (<Transaction transaction={transaction} key={transaction.id}></Transaction>))
                }
            </ul>
        </div>
    )
}