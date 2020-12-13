import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const AddTransaction=()=>{
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    function add(){
        const newTransaction={
            id:-1,
            text,
            amount:parseInt(amount)
        }
    addTransaction(newTransaction);
    }

    return(
        <React.Fragment>
            <h3>Add Transaction</h3>
            <hr/>
            <label><b>Description:</b></label><br/>
            <input type="text" placeholder="Enter Description" value={text} onChange={(e)=>setText(e.target.value)}/><br/>

            <label><b>Amount:</b></label><br/>
            <input type="number" placeholder="-ive->expense,+ive->income" value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/><br/>

            <button onClick={()=>add()} style={{backgroundColor:"white",border:"2px solid green"}}>Add</button>
        </React.Fragment>
    )
}