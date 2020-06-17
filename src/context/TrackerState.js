import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
const initialState = {
    transactions: []
};
export const TrackerContext = createContext(initialState);
export const TrackerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    function addTransaction(transaction) {
        dispatch({
            type: 'addTransaction',
            payload: transaction
        })
    }
    function delTransaction(id) {
        dispatch({
            type: 'deleteTransaction',
            payload: id
        })
    }
    return (
        <TrackerContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TrackerContext.Provider>
    )
}