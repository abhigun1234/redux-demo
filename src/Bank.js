import React from 'react';
import { legacy_createStore } from 'redux';

function Bank(props) {
    var defaultState=0
    //Reducers
    const balenceReducer=(state=defaultState,action)=>{
        console.log("reducer invoked")
        console.log("action",action)
        switch(action.type){

            case "Deposit":
                return state+100
            case "WithDrow":
                return state-100
            default :
            return state;

        }
    }
    var store=legacy_createStore(balenceReducer)
    console.log(store.getState())
     //store.dispatch("Deposit")
    // console.log(store.getState())
  function dipopsit(){
    store.dispatch({type:"Deposit"})
    console.log(store.getState())

  }
  function withdrow(){
    store.dispatch({type:"WithDrow"})
    console.log(store.getState())

  }

    return (
        <div>
            <button onClick={withdrow}>Withdrow</button>
            <button onClick={dipopsit}>dipopsit</button>
        </div>
    );
}

export default Bank;