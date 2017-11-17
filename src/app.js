// creo un Component Parent
class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.state = {
        options: ['Cosa uno', 'Cosa due', 'Cosa quattro']
      };
    }
    // creo il metodo da passare al Child
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options: []
        };
      });
    }
    // creo metodo che seleziona una opzione
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const opzioneSelected = this.state.options[randomNum];
      alert(opzioneSelected);
    }
    render() {
      const title = 'Indecisione App';
      const subtitle = 'Metti la tua vita nelle mani di un computer';
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption />
        </div>
      );
    }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

// creo il Component Action
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >Cosa devo fare?</button>
      </div>
    );
  }
}

// creo il component Options
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Rimuovi tutto</button>
        {this.props.options.map((option) => <Option key={option} textOption={option} />)}
      </div>
    );
  }
}

// creo il component Option
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.textOption}
      </div>
    );
  }
}

// creo il component AddOption
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const opzioneInserita = e.target.elements.option.value.trim();
    if(opzioneInserita) {
      alert(opzioneInserita);
    }
    // pulisco input
    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Aggiungi Opzione</button>
        </form>
      </div>
    );
  }
}

// renderizzare il Component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
