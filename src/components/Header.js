import React from 'react';

const style = {
  width : '100%',
  padding : '20px 0',
  backgroundColor : '#fff'
}
const h1Style={
  fontSize : 48,
  lineHeight: '50px'
}

const Header = () => {
  const title = 'PARRALAX'
  return (
  <header style={style}>
    <h1 style={h1Style}>{title}</h1>
  </header>
  );
};

export default Header;

