import React from 'react';
import { legacy_createStore } from 'redux';

function Bank(props) {
    var defaultState=0

// Reducer 

const bankBalenceReducer=(state=defaultState,action)=>{
console.log("reducer invoked action",action)
console.log("state",state)
switch(action.type){
  
    case "Deposit":
       return state=state+100
    case "WithDrow":
        return state=state-100

}

}

// create store
 var store=legacy_createStore(bankBalenceReducer)
// console.log("state",state)
 console.log(store.getState())
    //Reducers
    // const balenceReducer=(state=defaultState,action)=>{
    //     console.log("reducer invoked")
    //     console.log("action",action)
    //     switch(action.type){

    //         case "Deposit":
    //             return state+100
    //         case "WithDrow":
    //             return state-100
    //         default :
    //         return state;

    //     }
    // }
    // var store=legacy_createStore(balenceReducer)
    // console.log(store.getState())
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
            <button  onClick={dipopsit}>Withdrow</button>
            <button  onClick={withdrow}>dipopsit</button>
        </div>
    );
}

export default Bank;