import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAdd: () => dispatch({ type: "ADD" }),
    onSubtract: () => dispatch({ type: "SUBTRACT" }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
