import React from 'react';
import './Header.scss'

const Header = () => {
  const title = 'PARRALAX'  

  const pageList = document.querySelectorAll('.page');
  const clickHandler = (e)  => {
    console.log(pageList[e.currentTarget.dataset['id']])
  }
  return (
  <header >
    <h1>{title}</h1>
    <nav>
      <ul>
        <li><button onClick={clickHandler} data-id={0}>page1</button></li>
        <li><button onClick={clickHandler} data-id={1} >page2</button></li>
        <li><button onClick={clickHandler} data-id={2} >page3</button></li>
        <li><button onClick={clickHandler} data-id={3} >page4</button></li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;

