import React from 'react';

// creo il component AddOption
class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      }
    }
    handleAddOption(e) {
      e.preventDefault();
      const opzioneInserita = e.target.elements.option.value.trim();
  
      const error = this.props.handleAddOption(opzioneInserita);
      this.setState(() => ({ error }) );
  
      if(!error) {
        e.target.elements.option.value = '';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Aggiungi Opzione</button>
          </form>
        </div>
      );
    }
}

export default AddOption;