import React from 'react';

// creo il component Option
// statelss
const Option = (props) => {
    return (
      <div>
        {props.textOption}
        <button onClick={(e) => {
          props.handleDeleteOption(props.textOption)
        }}>remove</button>
      </div>
    );
}

export default Option;