class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        { this.state.visibility && (
          <div>
            <p>
              Hey. Here some details that you can now see!
            </p>
          </div>
        )}
      </div>
    );
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
