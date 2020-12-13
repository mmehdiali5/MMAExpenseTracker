import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const IncomeExpenses=()=>{
    const {transactions}=useContext(GlobalContext);

    const amounts=transactions.map(transaction=>transaction.amount);
    let expense=0;
    let income=0;
    for(let i=0;i<amounts.length;i++){
        if(amounts[i]<0){
            expense+=amounts[i];
        }else{
            income+=amounts[i];
        }
    }
    expense=expense*-1;
    return(
        <React.Fragment>
            <div style={{display:"flex",borderRadius:"5px",backgroundColor:"teal",padding:"10px",width:"45%"}}>
                <div style={{backgroundColor:"#ff4d4d",color:"white"}}>Expense: ${expense}</div>
                <div style={{backgroundColor:"#33cc33",color:"white",marginLeft:"5px"}}>Income: ${income}</div>
            </div>
        </React.Fragment>
    )
}