import React from 'react';

// creo il component Option
// statelss
const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.textOption}
    </p>
    <button className="button button--link" onClick={(e) => {
      props.handleDeleteOption(props.textOption)
    }}>Rimuovi</button>
  </div>
);

export default Option;