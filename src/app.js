// creo un Component Parent
class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: props.options
      };
    }
    // creo il metodo da passare al Child
    handleDeleteOptions() {
      this.setState(() => {
        return {
          // perché ho settato il valore di default
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
    // Aggiunta opzione
    handleAddOption(option) {
      if(!option) {
        return 'Inserire un valore valido per aggiungere un elemento';
      } else if(this.state.options.indexOf(option) > -1) {
        return 'Questa opzione già esiste';
      }
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
        };
      });
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
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
}

IndecisionApp.defaultProps = {
  options: []
}

// creo il Component Header
// stateless
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      { props.subtitle && <h2>{props.subtitle}</h2> }
    </div>
  );
}
// creo valori di defualt dei props
Header.defaultProps = {
  title: 'Indecision'
};


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

// creo il component Options
// stateless
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Rimuovi tutto</button>
      {props.options.map((option) => <Option key={option} textOption={option} />)}
    </div>
  );
}

// creo il component Option
// staelss
const Option = (props) => {
  return (
    <div>
      {props.textOption}
    </div>
  );
}

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
    this.setState(() => {
      return {
        error
      }
    })
    e.target.elements.option.value = '';
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

// stateless functional component
// const User = (props) => {
//   return (
//     <div>
//       <p>
//         Name: {props.name}
//       </p>
//       <p>
//         Age: {props.age}
//       </p>
//     </div>
//   );
// }

// renderizzare il Component
ReactDOM.render(<IndecisionApp options={['Devils den', 'Second district']} />, document.getElementById('app'));
