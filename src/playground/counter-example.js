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
  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('counter');
      const counter = parseInt(stringCount, 10);
      if(isNaN(counter)) {
        this.setState(() => ({ counter }));
      }
    } catch (e) {
      // non fare nulla
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.counter !== this.state.counter) {
      localStorage.setItem('counter', this.state.counter);
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


ReactDOM.render(<Counter counter={-10} />, document.getElementById('app'));
