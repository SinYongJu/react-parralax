import React from 'react';
import ParralaxTemplate from './template/ParralaxTemplate'
import TitleDescImgPageComp from '../components/TitleDescImgPageComp'
import Header from '../components/Header'


const ParralaxPage = (props) => {
  const [srcollObj, setScrollObj] = React.useState(null)
  const pageContentsArray = [
    { id : 1,
      title : 'page1',
      desc : 'page1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem rerum repudiandae deserunt nihil hic, nulla veritatis illo dignissimos eligendi eveniet, harum corrupti excepturi ea eos consequatur neque enim aliquid sit!',
      backgroundColor : ''
    },
    {
      id : 2,
      title : 'page2',
      desc : 'page2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem rerum repudiandae deserunt nihil hic, nulla veritatis illo dignissimos eligendi eveniet, harum corrupti excepturi ea eos consequatur neque enim aliquid sit!',
      backgroundColor : 'yellow'
    },
    {
      id : 3,
      title : 'page3',
      desc : 'page3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem rerum repudiandae deserunt nihil hic, nulla veritatis illo dignissimos eligendi eveniet, harum corrupti excepturi ea eos consequatur neque enim aliquid sit!',
      backgroundColor : 'blue'
    },
  ]

  // const bodyHtml = document.querySelector('body');
 
React.useEffect(()=>{
  const scrollHandeler = (e) => {
    setTimeout(()=>{
      setScrollObj(c => ({
        ...c,
        scrollY : window.scrollY
      }))
    },200)
  }
  window.addEventListener('scroll',scrollHandeler)  
})


  
  return (
      <ParralaxTemplate header={ <Header/>} pages={pageContentsArray.map((item) => <TitleDescImgPageComp key={item.id} {...item} />)}/>)
};

export default ParralaxPage;