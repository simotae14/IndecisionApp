let visible = false;

const appRoot = document.getElementById('app');

const onToggleText = () => {
    visible = !visible;
    renderTemplate();
};

const renderTemplate = () => {
    const template = (
        <div>
            <h1>
                Visibility Toggle
            </h1>
            <button 
                onClick={onToggleText}>
                {!visible ? 'Show details' : 'Hide details'}
            </button>
            {visible && <p>Hey! These are some details that you can see!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);

};

renderTemplate();