import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/actions";

const mapStateToProps = (state: any) => {
  // IMPT: When combining reducers, you need to reference the name of your reducer first,
  // before accessing the states managed by the reducer
  const { count } = state.counter;
  return { count };
};

const mapDispatchToProps = { increment, decrement };

const Counter = (props: any) => {
  const handleAddClick = () => {
    props.increment();
  };
  const handleMinusClick = () => {
    props.decrement();
  };

  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
