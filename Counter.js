import React from 'react';
import { connect } from 'react-redux'

// Action Creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num}
}

// Reducer Function 
function Counter(props){
  function handleClick(){
    props.incrementCounter(100);
  }
  return <div class="full-height"><h1>{props.count}</h1>
  
  <button class="button" onClick={handleClick}
  >Increment</button>
    </div>;
}

function mapStateToProps(state){
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);