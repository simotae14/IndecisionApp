import React from 'react';

// creo il component AddOption
class AddOption extends React.Component {
    state = {
      error: undefined
    };
    handleAddOption = (e) => {
      e.preventDefault();
      const opzioneInserita = e.target.elements.option.value.trim();
  
      const error = this.props.handleAddOption(opzioneInserita);
      this.setState(() => ({ error }) );
  
      if(!error) {
        e.target.elements.option.value = '';
      }
    };
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Aggiungi Opzione</button>
          </form>
        </div>
      );
    }
}

export default AddOption;