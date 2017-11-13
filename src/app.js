class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indeciso</h1>
        <h2>Metti la tua vita nelle mani di un computer</h2>
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
    return (
      <div>
        Options component here
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

// istanzio il Component
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);


// renderizzare il Component
ReactDOM.render(jsx, document.getElementById('app'));
