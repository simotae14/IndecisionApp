console.log('App.js in esecuzione');

const template = (
    <div>
        <h1>
            Indecision App
        </h1>
        <p>
            Qualche info
        </p>
    </div>
);

let contatore = 0;

const add1 = () => {
    contatore++;
    renderAppCount();
}

const sub1 = () => {
    contatore--;
    renderAppCount();
}
const reset = () => {
    contatore = 0;
    renderAppCount();
}

const appRoot = document.getElementById('app');

const renderAppCount = () => {
    const templateTwo = (
        <div>
            <h1>
                Contatore: {contatore}
            </h1>
            <button 
                onClick={add1}>+1</button>
            <button 
                onClick={sub1}>-1</button>
                <button 
                onClick={reset}>reset</button>
    </div>
    );

    // renderizzo
    ReactDOM.render(templateTwo, appRoot);
}

renderAppCount();

