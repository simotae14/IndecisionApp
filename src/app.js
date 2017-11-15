// const obj = {
//   nome: 'Vikram',
//   getNome() {
//     return this.nome;
//   }
// }
//
// const func = function() {
//   console.log(this);
// }
//
// func();
//
// const getNome = obj.getNome.bind({nome: 'Simone'});
//
// console.log(getNome());

// creo un Component Parent
class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecisione';
      const subtitle = 'Metti la tua vita nelle mani di un computer';
      const options = ['Cosa uno', 'Cosa due', 'Cosa quattro'];
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
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
  // definisco un metodo del component
  handlePick() {
    alert('handlePick created');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Cosa devo fare?</button>
      </div>
    );
  }
}

// creo il component Options
class Options extends React.Component {
  constructor(props) {
    super(props);
    // faccio il bind dell'handler
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  // definisco un metodo del Component
  handleRemoveAll() {
    console.log(this.props.options);
    //alert('selected Remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>Rimuovi tutto</button>
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
