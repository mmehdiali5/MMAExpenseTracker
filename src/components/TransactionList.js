import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const TransactionList=()=>{
    const {transactions}=useContext(GlobalContext);
    const {deleteTransaction}=useContext(GlobalContext);


    const styleGreen={
        display:"flex",
        margin:"5px",
        padding:"5px",
        borderRadius:"5px",
        justifyContent:"space-between",
        backgroundColor:"white",
        border:"2px solid green"
    }

    const styleRed={
        display:"flex",
        margin:"5px",
        padding:"5px",
        borderRadius:"5px",
        justifyContent:"space-between",
        backgroundColor:"white",
        border:"2px solid red"
    }

    const redBtnStyle={
        marginRight:"-5px",
        marginLeft:"5px",
        padding:"6px",
        cursor:"pointer",
        color:"white",
        backgroundColor:"red"
    }

    const greenBtnStyle={
        marginRight:"-5px",
        marginLeft:"5px",
        padding:"6px",
        cursor:"pointer",
        color:"white",
        backgroundColor:"green"
    }

    return(

        <React.Fragment>
            <h3>Transaction History</h3>
            <table>

                    {
                        transactions.length == 0 &&
                            <span> NO TRANSACTIONS YET!</span>
                    }

                    {
                        transactions.map((t,index)=>{
                        if(t.amount<0) {
                            return (
                                <div style={styleRed}>
                                    <span>{t.text}</span>
                                    <span style={{marginLeft:"20px"}}>${t.amount}

                                        <span style={redBtnStyle} id={index} onClick={()=>deleteTransaction(t.id)}>X
                                       </span>
                                   </span>
                                </div>

                            )
                        }else{
                            return (
                                <div style={styleGreen}>
                                    <span>{t.text}</span>
                                    <span style={{marginLeft:"20px"}}>${t.amount}
                                        <span style={greenBtnStyle} id={index} onClick={()=>deleteTransaction(t.id)}>X
                                       </span>
                                   </span>
                                </div>
                            )
                        }
                    })
                }
            </table>
        </React.Fragment>
    )
}