import React from 'react';
import {createStore, combineReducers} from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const myDefaultState = () => ({
  type: 'GET_DEFAULT',
  
});
const ReducerDefaultState = [{
  chartes: [
    {
   id:1,
   name:'AADR',
   quantity:430,
   price:50.30,
   avg_cost:41.75,
   invest_cost:17952.07,
   portfolio_percent:22.06,
   unrealized_pl:3676.93,
   return_percent:20.48
  },
  {
    id:2,
    name:'MFEM',
    quantity:210,
    price:23.20,
    avg_cost:22.50,
    invest_cost:4725.84,
    portfolio_percent:5.81,
    unrealized_pl:146.16,
    return_percent:3.09
   },
   {
    id:3,
    name:'JPEM',
    quantity:328,
    price:52.50,
    avg_cost:56.70,
    invest_cost:18597.60,
    portfolio_percent:22.86,
    unrealized_pl:1377.60,
    return_percent:7.41
   },
   {
    id:4,
    name:'KEMQ',
    quantity:801,
    price:20.40,
    avg_cost:22.24,
    invest_cost:17811.04,
    portfolio_percent:21.89,
    unrealized_pl:1470.64,
    return_percent:-8.26
   },
   {
    id:5,
    name:'KLDW',
    quantity:523,
    price:32.90,
    avg_cost:26.32,
    invest_cost:13765.36,
    portfolio_percent:16.92,
    unrealized_pl:3441.34,
    return_percent:25.00
   },
   {
    id:6,
    name:'KOIN',
    quantity:335,
    price:25.40,
    avg_cost:25.40,
    invest_cost:8509.00,
    portfolio_percent:10.46,
    unrealized_pl:-1,
    return_percent:0.00
   },

],
total_mf:0,
total_ef:0
}];

const myReducer = (state = ReducerDefaultState, action) => {
  switch (action.type) {
   case 'GET_DEFAULT':
   return state;
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    chartes: myReducer
  })
);
let state = store.getState();
store.subscribe(() => {
//  state = store.getState()
 console.log('I am subscribe');
 console.log(state);
  
});
// store.dispatch(myDefaultState());
ReactDOM.render(
  <React.StrictMode>
    {/* <App chartes={state.chartes}/> */}
    <App store={store}  /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
