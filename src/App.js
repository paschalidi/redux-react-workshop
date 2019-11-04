import React from 'react';
import {connect} from "react-redux";

function App({countReducer, dispatch}) {
  return (
    <div>
      <button onClick={()=>dispatch({type:'COUNT_UP'})}>
        count me up
      </button>
      <button onClick={()=>dispatch({type:'COUNT_DOWN'})}>
        count me down
      </button>
      <div>
        {countReducer}
      </div>
    </div>
  );
}

const mapsStateToProps = ({countReducer}) => ({countReducer})
export default connect(mapsStateToProps)(App);
