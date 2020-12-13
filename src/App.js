import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/incomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from "./context/GlobalState";


function App() {

    return(
        <GlobalProvider>
<div className="container">
    <div className="col-3" style={{paddingLeft:"10%"}}></div>
                <Header/>
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
    <div className="col-4"></div>
</div>
        </GlobalProvider>
    )

}

export default App;
