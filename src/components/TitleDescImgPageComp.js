import React from 'react';



const TitleDescImgPageComp = ({imgSrc}) => {
  const title = 'TitleDescImgPage'
  const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cupiditate quas officiis sunt fugiat, tempore voluptatibus totam, earum veniam qui alias possimus ea ipsum ducimus, libero dicta reprehenderit dolores cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cupiditate quas officiis sunt fugiat, tempore voluptatibus totam, earum veniam qui alias possimus ea ipsum ducimus, libero dicta reprehenderit dolores cum? '
  const style = {
    'width' : '100%',
    'height': '100%',
    'padding': `10% 5%`,
    'backgroundColor':'rgba(0,0,0,.5)',
    'backgroundSize':'cover',
    'backgroundImage': `url(${imgSrc})`,
    'boxSizing' : 'border-box'
  }
  
  const titleStyle = {
    'paddingBottom' : '7%',
    fontSize : 78,
    lineHeight: '80px'
  }   
  const descStyle = {
    'width':'40%',
    fontSize : 28,
    lineHeight: '30px'
  }
  return (
    <div style={style}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{desc}</p>
    </div>
  );
};

export default TitleDescImgPageComp;