import React, { useContext } from 'react';
import { TrackerContext } from '../context/TrackerState';

export const Transaction = (props) => {
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const { delTransaction } = useContext(TrackerContext);
    return (
        <li className={sign === '+' ? 'positive' : 'negative'}>
            <span className='title'>{props.transaction.text}</span>
            <span className='list-amount'>{sign}Rs. {Math.abs(props.transaction.amount)}</span>
            <button className='del' onClick={() => delTransaction(props.transaction.id)}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </li>
    )
}