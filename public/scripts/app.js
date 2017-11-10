'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Persona = function () {
  function Persona() {
    var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var eta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Persona);

    this.nome = nome;
    this.eta = eta;
  }

  _createClass(Persona, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi, I am ' + this.nome + '!';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.nome + ' is ' + this.eta + ' year(s) old.';
    }
  }]);

  return Persona;
}();

var Studente = function (_Persona) {
  _inherits(Studente, _Persona);

  function Studente(nome, eta, laurea) {
    _classCallCheck(this, Studente);

    var _this = _possibleConstructorReturn(this, (Studente.__proto__ || Object.getPrototypeOf(Studente)).call(this, nome, eta));

    _this.laurea = laurea;
    return _this;
  }

  _createClass(Studente, [{
    key: 'hasMajor',
    value: function hasMajor() {
      return !!this.laurea;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      var description = _get(Studente.prototype.__proto__ || Object.getPrototypeOf(Studente.prototype), 'getDescription', this).call(this);
      if (this.hasMajor()) {
        description += ' Their major is ' + this.laurea;
      }
      return description;
    }
  }]);

  return Studente;
}(Persona);

var Traveler = function (_Persona2) {
  _inherits(Traveler, _Persona2);

  function Traveler(nome, eta, homeLocation) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, nome, eta));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
      if (this.homeLocation) {
        greeting += ' I\'m visiting from ' + this.homeLocation + '.';
      }
      return greeting;
    }
  }]);

  return Traveler;
}(Persona);

var me = new Traveler('Andrew Mead', 26, 'Philadelphia');

console.log(me.getGreeting());

var altro = new Traveler();

console.log(altro.getGreeting());
