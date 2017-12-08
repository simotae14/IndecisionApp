import React from 'react';
import Option from "./Option";

// creo il component Options
// stateless
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Le Tue Opzioni</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions
      }>Rimuovi tutto</button>
    </div>

    {props.options.length === 0 && <p className="widget__message">Per favore inserisci una opzione per iniziare!</p>}
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