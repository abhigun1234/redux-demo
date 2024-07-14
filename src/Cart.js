import React, { useState } from 'react';
import { legacy_createStore } from 'redux';

function Cart(props) {

// intial state
var item=0;
var [cartItem,setItem]=useState(1)
    //reducer 
   const cartReducer=(state=item,action)=>{
    console.log("reducer called")
    console.log("action",action)

    switch(action.type){
      case "AddToCart":
        return state+1
        case "RemoveFromCart":
            return state-1

    }

   }

// store

   var store=legacy_createStore(cartReducer)

   // dispach 
  console.log( store.getState())
 
function addToCart(){
    store.dispatch({type:"AddToCart"})
    console.log( store.getState())
}
function removeFromCart(){
    store.dispatch({type:"RemoveFromCart"})
    console.log(store.getState())
    cartItem=10


}
    return (
        <div>
            <button onClick={addToCart}>AddToCart</button>
            <button onClick={removeFromCart}>RemoveFromCart</button>
            <label>CartData:{cartItem}</label>
            {cartItem}
        </div>
    );
}

export default Cart;