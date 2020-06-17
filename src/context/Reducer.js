export default (state,action)=>{
    switch(action.type){
        case 'addTransaction':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case 'deleteTransaction':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        default:
            return state;
    }
}