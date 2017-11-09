'use strict';

console.log('App.js in esecuzione');

var app = {
    titolo: 'Indecision App',
    sottotitolo: 'Metti la tua vita nelle mani di un computer',
    opzioni: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var opzione = event.target.elements.opzione.value;
    if (opzione) {
        app.opzioni.push(opzione);

        // refresho input
        event.target.elements.opzione.value = '';
        renderTemplate();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.opzioni = [];

    renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.titolo
        ),
        app.sottotitolo && React.createElement(
            'p',
            null,
            app.sottotitolo
        ),
        React.createElement(
            'p',
            null,
            app.opzioni.length > 0 ? 'Ecco le opzioni possibili' : 'Nessuna opzione'
        ),
        React.createElement(
            'p',
            null,
            app.opzioni.length
        ),
        React.createElement(
            'button',
            {
                onClick: onRemoveAll },
            'Rimuovi tutti'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'item uno'
            ),
            React.createElement(
                'li',
                null,
                'item due'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'opzione' }),
            React.createElement(
                'button',
                null,
                'Aggiungi Opzione'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();
