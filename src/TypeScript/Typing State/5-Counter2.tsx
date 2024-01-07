import { stat } from "fs";
import { useReducer } from "react";

type CounterState = {
  counter: number;
};

// type CounterAction = {
//   type: "INCREMENT" | "DECREMENT" | "RESET";
//   payload: number;
// };

// Now 2 action type to handle 2 different cases
type UpdateAction= {
    type: "INCREMENT" | "DECREMENT"
    payload: number
}
type ResetAction= {
   type: "RESET"
}
type CounterAction = UpdateAction | ResetAction

const initialState = {
  counter: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + action.payload };
    case "DECREMENT":
      return { counter: state.counter - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count : {state.counter}
      {/* Here the reset case is not handled in reducer still ts is not throwing error */}
      {/* <button onClick={() => dispatch({ type: "RESET", payload: 10 })}>
        Increment By 10
      </button> */}
      <button onClick={() => dispatch({ type: "RESET"})}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment By 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement By 10
      </button>
    </div>
  );
};

export default Counter2;

// Here right now the type property of action object is of type string means any type of string value it can have but we as a developer should restrict the action type value so that some other developer will not accidently put other action type in it which will crash the application , So again we will use "UNION" as action type to restrict its value

// Here as "RESET" case does not require any payload so if i do not pass any payload to dispatch function the ts error will come as action object must contain payload property so now i can make payload as optional which in turn give me error in "INCREMENT" or "DECREMENT" case as action.payload now can be null as well so have to put them as option chaining which is not good if there is large scale project so a good pratice is to have 2 action type one for "INCREMENT" and "DECREMENT" and one is for "RESET" case 