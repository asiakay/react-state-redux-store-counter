import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
// create an action and correspondig reducer
function incrementCounter(num){
  return {
  type: 'INCREMENT',
  num: num
  }
}

//our reducer.
const initialState={
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type){
    case 'Increment':
      return {count: state + action.num};
    default: 
      return state;
  }
}

const store = createStore(reducer);

const el = <Provider store={store}>
  <Counter />
  </ Provider>; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);