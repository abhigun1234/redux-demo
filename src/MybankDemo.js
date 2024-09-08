import React from 'react';
import { legacy_createStore } from 'redux';

function MybankDemo(props) {

    // reducer
    var defaultState=0
    //Reducers
    const balenceReducer=(state=defaultState,action)=>{
        console.log("reducer invoked")
        console.log("action",action)
        switch(action.type){

            case "Deposit":
                return state+200
            case "WithDrow":
                return state-200
            default :
            return state;

        }
    }
    var store=legacy_createStore(balenceReducer)
    console.log(store.getState())
    const withDrow=()=>{
        store.dispatch({type:"WithDrow"})
        console.log(store.getState())
    }
    const deposit=()=>{
        store.dispatch({type:"Deposit"})
        console.log(store.getState())
    }
    return (
        <div>
            <button onClick={withDrow}>Withdrow</button>
            <button onClick={deposit}>Deposit</button>
        </div>
    );
}

export default MybankDemo;