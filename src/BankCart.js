import { Button } from 'bootstrap';
import React from 'react';
import { legacy_createStore } from 'redux';

function BankCart(props) {
    var defaultState=0;
    // reducer 
    const balenceReducer=(state=defaultState,action)=>{
        switch(action.type){
            case "Deposit":
                return state+100
             case "Withdrow":
                return state-100
        }
    }
function dipopsit(){
    store.dispatch({type:"Deposit"})
    console.log(store.getState())

  }
  function withdrow(){
    store.dispatch({type:"WithDrow"})
    console.log(store.getState())

  }
    var store=legacy_createStore(balenceReducer)
    console.log("state",store.getState())
    return (
        <div>
  <button onClick={dipopsit}>Diposit</button>        
        </div>
    );
}

export default BankCart;