import React from 'react';

// creo il Component Header
// stateless
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    { props.subtitle && <h2>{props.subtitle}</h2> }
  </div>
);

// creo valori di defualt dei props
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;