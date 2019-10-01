import React from 'react';
import ParralaxTemplate from './template/ParralaxTemplate'
import TitleDescImgPageComp from '../components/TitleDescImgPageComp'

const ParralaxPage = () => {
  const [imgSrc01,imgSrc02,imgSrc03,imgSrc04,imgSrc05] = ['./images/bg_todo01.jpg','./images/bg_todo02.jpg','./images/bg_todo03.jpg','./images/bg_todo04.jpg','./images/bg_todo05.jpg']
  const [isInitState, actionIsInitState] = React.useState(null)
  
  const [LODED,LODING]= ['LOADED' , 'LODING'];

  
  const handler = (e)=>{
    if(isInitState === LODED ){
      actionIsInitState(LODING)
    }else{
      actionIsInitState(LODED)
    }
  }  
  document.addEventListener('DOMContentLoaded',handler);
  React.useEffect(()=>{
    console.log('loading..')
     return ()=>{
        document.removeEventListener('DOMContentLoaded',handler)
     };
  },[])
 
  


  return (
    isInitState === LODED ? 
    <ParralaxTemplate
      page1={<TitleDescImgPageComp imgSrc={imgSrc01}/>}  
      page2={<TitleDescImgPageComp imgSrc={imgSrc02}/>}  
      page3={<TitleDescImgPageComp imgSrc={imgSrc03}/>}  
      page4={<TitleDescImgPageComp imgSrc={imgSrc04}/>}  
      page5={<TitleDescImgPageComp imgSrc={imgSrc05}/>}  
    /> :
    <div style={{'fontSize':'200px'}}>
      <h2>loading 중</h2>
    </div>
  );
};

export default ParralaxPage;