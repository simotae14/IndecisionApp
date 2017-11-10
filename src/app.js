console.log('App.js in esecuzione');

const app = {
    titolo: 'Indecision App',
    sottotitolo: 'Metti la tua vita nelle mani di un computer',
    opzioni: []
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const opzione = event.target.elements.opzione.value;
    if(opzione) {
        app.opzioni.push(opzione);
        console.log(app.opzioni)
        // refresho input
        event.target.elements.opzione.value = '';
        renderTemplate();
    }
};

const onRemoveAll = () => {
    app.opzioni = [];

    renderTemplate();
}

const appRoot = document.getElementById('app');

const numeri = [55, 101, 1000];

const renderTemplate = () => {
    const template = (
        <div>
            <h1>
                {app.titolo}
            </h1>
            {app.sottotitolo && <p>{app.sottotitolo}</p>}
            <p>
                {app.opzioni.length > 0 ? 'Ecco le opzioni possibili' : 'Nessuna opzione'}
            </p>
            <p>
                {app.opzioni.length}
            </p>
            <button
                onClick={onRemoveAll}>
                Rimuovi tutti
            </button>
            <ol>
                {
                    app.opzioni.map((opt) => <li key={opt}>{opt}</li>)
                    
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="opzione" />
                <button>Aggiungi Opzione</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

renderTemplate();