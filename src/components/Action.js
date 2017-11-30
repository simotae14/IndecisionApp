import React from 'react';

// creo il Component Action
// stateless
const Action = (props) => {
    return (
      <div>
        <button
          disabled={!props.hasOptions}
          onClick={props.handlePick}
        >Cosa devo fare?</button>
      </div>
    );
};

export default Action;