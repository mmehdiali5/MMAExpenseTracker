import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
//myComment



const initialState={
    transactions:[]
}


export const GlobalContext=createContext(initialState)

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    function deleteTransaction(id){
        dispatch({
            type:'Delete',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'Add',
            payload:transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
