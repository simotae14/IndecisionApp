import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

// renderizzare il Component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// vecchia sintassi Classi
class VecchiaSintassi {
    constructor() {
        this.nome = "Mike";
    }
}

const vecchiaSintassi = new VecchiaSintassi();
console.log(vecchiaSintassi);

// nuova sintassi Classi
class NuovaSintassi {
    nome = "Jen";
}

const nuovaSintassi = new NuovaSintassi();
console.log(nuovaSintassi);