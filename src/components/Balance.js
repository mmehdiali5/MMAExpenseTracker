import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance=()=>{
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transaction=>transaction.amount);
    const total = amounts.reduce((totalVal,item)=>(totalVal+=item),0).toFixed(2);
    return(
        <React.Fragment>
            <h3 style={{fontFamily:"Piedra,cursive"}}>BALANCE ${total}</h3>
        </React.Fragment>
    )
}