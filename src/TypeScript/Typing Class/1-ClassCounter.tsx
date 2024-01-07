import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// Here by generic "Component<CounterProps , CounterState>" , The props type is CounterProps and state type is CounterState
export class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h4>Class Counter</h4>
        <button onClick={this.handleClick}>INCREMENT</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default ClassCounter;

// Here in class component in which we have a counter state which we will increment based on button click and a message props to be diplayed in JSX , right now ts shows 2 error for state it shows "Property 'count' does not exist on type 'Readonly<{}>'" and for props "Property 'message' does not exist on type 'Readonly<{}>'"

// Here typing class component is 2 step process , step one we need to define props and state type then connect these 2 types with class component. In order to connect we use syntax "Component<props type , state type>" and we are done.

// Here if our class component is props only then use "Component<props type>" and if state only then use "Component<{}, state type>".
