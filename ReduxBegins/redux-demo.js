const redux = require('redux');

//  REDUCER
const  counterReducer = (state ={counter :0}, action) =>{
   if(action.type === 'increment'){
    return{
        counter: state.counter +1,
    };
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter -1,
        };
    }
    return state;
};

//STORE
const store = redux.createStore(counterReducer);

//SUBSCRIPTION CODE
const counterSubscriber = () =>{
  const latestState =  store.getState();  // we can get to that latest state after it was changed with .getState()
  console.log(latestState);
}

//SUBSCRIPTION DONE BY STORE 
store.subscribe(counterSubscriber);

//ACTION DISPATCH
store.dispatch({type: 'increment'}); //goes to reducer function and does stuff according to it's action
store.dispatch({type: 'decrement'}); //goes to reducer function and does stuff according to it's action