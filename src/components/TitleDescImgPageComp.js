import React from 'react';
import './TitleDescImgPageComp.scss';

const TitleDescImgPageComp = (props) => {
  const {title,desc,backgroundColor} = props
  const [elInfo , setElInfo] = React.useState({})

  const thisRef = React.useRef(null)
  React.useEffect(()=>{
    setElInfo((c) => ({
      ...c,
      offsetTop : thisRef.current.offsetTop
    }))

  },[])
  return (
    <div ref={thisRef} className={"page"} style={{backgroundColor}} data-pos={elInfo.offsetTop}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default TitleDescImgPageComp;