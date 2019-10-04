import React from 'react';
import './Header.scss'

const Header = () => {
  const title = 'PARRALAX'  

  
  const clickHandler = (item)  => {
   
    console.log(item.dataset.pos, window.scrollY )
    window.scrollY = item.dataset.pos + 'px'
  }
  
  const [nav , setNav]  = React.useState(null)

  React.useEffect(()=>{
    const pageList = document.querySelectorAll('.page');
    const nav = Array.from(pageList).map((item,index)=>{
      return (
        <li key={index}><button onClick={(e)=>clickHandler(item)} data-id={index}>{'page'+index}</button></li>
      )
    })
    setNav(nav)
  },[])
  return (
  <header >
    <h1>{title}</h1>
    <nav>
      <ul>
        {/* <li><button onClick={clickHandler} data-id={0}>page1</button></li>
        <li><button onClick={clickHandler} data-id={1} >page2</button></li>
        <li><button onClick={clickHandler} data-id={2} >page3</button></li> */}
        {nav}
      </ul>
    </nav>
  </header>
  );
};

export default Header;

