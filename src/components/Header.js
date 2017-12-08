import React from 'react';

// creo il Component Header
// stateless
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      { props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2> }
    </div>
  </div>
);

// creo valori di defualt dei props
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;