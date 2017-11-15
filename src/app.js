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
  render() {
    return (
      <div>
        <button>Cosa devo fare?</button>
      </div>
    );
  }
}

// creo il component Options
class Options extends React.Component {
  render() {
    console.log(this.props.options);
    return (
      <div>
        {this.props.options.map((option) => <Option key={option} textOption={option} />)}
        <Option />
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
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

// renderizzare il Component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
