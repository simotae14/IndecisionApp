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
        console.log(app.opzioni);
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

var numeri = [55, 101, 1000];

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
            app.opzioni.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
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
