class Counter extends React.Component {
  // costruttore
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // setto lo state
    this.state = {
      counter: 0
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        counter: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>
          Count: {this.state.counter}
        </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
