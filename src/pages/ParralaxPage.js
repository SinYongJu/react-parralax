import React from 'react';
import ParralaxTemplate from './template/ParralaxTemplate'
import TitleDescImgPageComp from '../components/TitleDescImgPageComp'

const ParralaxPage = ({isInitState}) => {
  const [imgSrc01, imgSrc02, imgSrc03, imgSrc04, imgSrc05] = isInitState === 'LOADED' ? ['./images/bg_todo01.jpg','./images/bg_todo02.jpg','./images/bg_todo03.jpg','./images/bg_todo04.jpg','./images/bg_todo05.jpg'] : []
  return (
    isInitState === 'LOADED' ? 
    <ParralaxTemplate
      page1={<TitleDescImgPageComp imgSrc={imgSrc01}/>}  
      page2={<TitleDescImgPageComp imgSrc={imgSrc02}/>}  
      page3={<TitleDescImgPageComp imgSrc={imgSrc03}/>}  
      page4={<TitleDescImgPageComp imgSrc={imgSrc04}/>}  
      page5={<TitleDescImgPageComp imgSrc={imgSrc05}/>}  
    /> :
    <div style={{'fontSize':'180px'}}>
      <h2>loading 중</h2>
    </div>
  );
};

export default ParralaxPage;