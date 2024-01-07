import { stat } from "fs";
import { useReducer } from "react";

type CounterState = {
  counter: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = {
  counter: 0,
};

// Here with useReducer() we need to give type to state and action parameter and based on that the type for state variable and dispatch setter function will be automatically infered for us by ts  
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + action.payload };
    case "DECREMENT":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
}

const Counter = () => {

  // Here by inference from reducer function ts infers the type for state as CounterState and for dispatch function as React.Dispatch<CounterAction>
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count : {state.counter}
      
      {/* Here the type of type property and payload property of action object is string or number respectively so it can not have different type else ts will show error */}
      {/* <button onClick={()=> dispatch({type:true,payload:10})}>Increment By 10</button> */}
      {/* <button onClick={()=> dispatch({type:"DECREMENT",payload:"10"})}>Decrement By 10</button> */}
      
      <button onClick={()=> dispatch({type:"INCREMENT",payload:10})}>Increment By 10</button>
      <button onClick={()=> dispatch({type:"DECREMENT",payload:10})}>Decrement By 10</button>
    </div>
  );
};

export default Counter;

// Here when new value of state depend on previous state we generally use useReducer() over useState() , now when we give type to useReducer() we generally give type to state and action object and based on that useReducer() hook automatically infer rest of the type for us.

// 
