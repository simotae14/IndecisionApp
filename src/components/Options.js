import React from 'react';
import Option from "./Option";

// creo il component Options
// stateless
const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Rimuovi tutto</button>
    {props.options.length === 0 && <p>Per favore inserisci una opzione per iniziare!</p>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          textOption={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

  
export default Options;