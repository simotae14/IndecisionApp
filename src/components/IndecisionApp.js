import React from 'react';

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'


// creo un Component Parent
export default class IndecisionApp extends React.Component {
    state = {
      options: []
    };
    // creo il metodo da passare al Child
    handleDeleteOptions = () => {
      this.setState(() =>  ({ options: [] }));
    };    
    // creo il metodo per rimuovere una sola opzione
    handleDeleteOption = (optionToRemove) => {
      // modifico lo stato di options rimuovendo la option
      this.setState((prevState) => ( {
          options: prevState.options.filter((option) => optionToRemove !== option )
      }));
    };
    // creo metodo che seleziona una opzione
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const opzioneSelected = this.state.options[randomNum];
      alert(opzioneSelected);
    };
    // Aggiunta opzione
    handleAddOption = (option) => {
      if(!option) {
        return 'Inserire un valore valido per aggiungere un elemento';
      } else if(this.state.options.indexOf(option) > -1) {
        return 'Questa opzione già esiste';
      }
      this.setState((prevState) => ({
        options: prevState.options.concat([option])
      }));
    };
    // component method quando viene creato per la prima volta nel Dom il component
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // non fare nulla
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }
    render() {
      const subtitle = 'Metti la tua vita nelle mani di un computer';
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
}
