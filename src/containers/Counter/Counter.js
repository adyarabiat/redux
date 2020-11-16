import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionType from "../../store/actionType";

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
    onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionType.ADD, val: 5 }),
    onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, val: 5 }),
    onStoreResult: (result) =>
      dispatch({
        type: actionType.STORE_RESULT,
        resultPassed: result,
      }),
    onDeleteResult: (id) =>
      dispatch({ type: actionType.DELETE_RESULT, resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
