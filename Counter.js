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
  
  <button className="button" onClick={handleClick}
  >Increment</button>

 



 


<div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  

  
  
</div>









  <div class="footer">
  <p>Footer</p>
</div>
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