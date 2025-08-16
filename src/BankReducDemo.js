import React from 'react';
import { legacy_createStore } from 'redux';


function BankReducDemo(props) {
    const defaultState=0;

    const bankBalenceReducer=(state=defaultState,action)=>{
console.log("reducer invoked action",action)
console.log("state",state)
switch(action.type){
  
    case "Deposit":
       return state=state+100
    case "witdraw":
        return state=state-100

}



    }
function deposit(){
 store.dispatch({type:"Deposit"})
 console.log(store.getState())
}
function witdraw(){
 store.dispatch({type:"witdraw"})
 console.log(store.getState())
}
// create store
 var store= legacy_createStore(bankBalenceReducer)

    return (
        <div>
            redux
            <button onClick={deposit}>deposit</button>
               <button onClick={witdraw}>witdraw</button>
        </div>
    );
}

export default BankReducDemo;