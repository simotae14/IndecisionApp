'use strict';

console.log('App.js in esecuzione');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'Qualche info'
    )
);

var contatore = 0;

var add1 = function add1() {
    contatore++;
    renderAppCount();
};

var sub1 = function sub1() {
    contatore--;
    renderAppCount();
};
var reset = function reset() {
    contatore = 0;
    renderAppCount();
};

var appRoot = document.getElementById('app');

var renderAppCount = function renderAppCount() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Contatore: ',
            contatore
        ),
        React.createElement(
            'button',
            {
                onClick: add1 },
            '+1'
        ),
        React.createElement(
            'button',
            {
                onClick: sub1 },
            '-1'
        ),
        React.createElement(
            'button',
            {
                onClick: reset },
            'reset'
        )
    );

    // renderizzo
    ReactDOM.render(templateTwo, appRoot);
};

renderAppCount();
