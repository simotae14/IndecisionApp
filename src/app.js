// creo un Component Parent
class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
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
    // creo il metodo da passare al Child
    handleDeleteOptions() {
      this.setState(() =>  ({ options: [] }));
    }    // creo il metodo per rimuovere una sola opzione
    handleDeleteOption(optionToRemove) {
      // modifico lo stato di options rimuovendo la option
      this.setState((prevState) => ( {
          options: prevState.options.filter((option) => optionToRemove !== option )
      }));
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
      this.setState((prevState) => ({
        options: prevState.options.concat([option])
      }));
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
}

// creo il component Option
// staelss
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
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
