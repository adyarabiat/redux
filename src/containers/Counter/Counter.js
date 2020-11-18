import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { increment } from "../../store/actions/actions";
import { decrement } from "../../store/actions/actions";
import { add } from "../../store/actions/actions";
import { subtract } from "../../store/actions/actions";
import { store_result } from "../../store/actions/actions";
import { delete_result } from "../../store/actions/actions";

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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    onStoreResult: (result) => dispatch(store_result(result)),
    onDeleteResult: (id) => dispatch(delete_result(id)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
