class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(props);
    this.state = {
      visible: false
    }
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visible: true
      }
    });
  }
  render() {
    return (
      <div>
          <h1>
              Visibility Toggle
          </h1>
          <button
              onClick={this.handleToggle}>
              {!this.state.visible ? 'Show details' : 'Hide details'}
          </button>
          {this.state.visible && <p>Hey! These are some details that you can see!</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visible = false;
//
// const appRoot = document.getElementById('app');
//
// const onToggleText = () => {
//     visible = !visible;
//     renderTemplate();
// };
//
// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>
//                 Visibility Toggle
//             </h1>
//             <button
//                 onClick={onToggleText}>
//                 {!visible ? 'Show details' : 'Hide details'}
//             </button>
//             {visible && <p>Hey! These are some details that you can see!</p>}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
//
// };
//
// renderTemplate();
