import React from "react";
import { connect } from "react-redux";

function App({ countReducer, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUNT_UP" })}>
        increase by 1
      </button>
      <button onClick={() => dispatch({ type: "COUNT_DOWN" })}>
        decrease by 1
      </button>
      <div>{countReducer}</div>
    </div>
  );
}

const mapsStateToProps = ({ countReducer }) => ({ countReducer });

export default connect(mapsStateToProps)(App);
