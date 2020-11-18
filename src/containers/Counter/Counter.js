import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionCounter from "../../store/actions/counterActions";
import * as actionResult from "../../store/actions/resultAction";

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
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Results
        </button>
        <ul>
          {this.props.res.map((store) => {
            return (
              <li
                key={store.id}
                onClick={() => this.props.onDeleteResult(store.id)}
              >
                {store.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    res: state.res.results,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCounter.increment()),
    onDecrementCounter: () => dispatch(actionCounter.decrement()),
    onAddCounter: () => dispatch(actionCounter.add(5)),
    onSubtractCounter: () => dispatch(actionCounter.subtract(5)),
    onStoreResult: (result) => dispatch(actionResult.store_result(result)),
    onDeleteResult: (id) => dispatch(actionResult.delete_result(id)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
