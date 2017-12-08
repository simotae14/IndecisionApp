import React from 'react';

// creo il Component Action
// stateless
const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >Cosa devo fare?</button>
  </div>
);

export default Action;