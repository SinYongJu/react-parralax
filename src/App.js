import React from 'react';
import ParralaxPage from './pages/ParralaxPage'
import Header from './components/Header'

const  App = () => {

  const [isInitState, actionIsInitState] = React.useState(null)
  const [LODED,LODING]= ['LOADED' , 'LODING'];

  const handler = (e)=>{ 
    if(e){
      console.log(e)
    }
    if(isInitState === LODED ){
      actionIsInitState(LODING)
    }else{
      actionIsInitState(LODED)
    }
   
  }  
  const scrollHandler = (e) => {
    setTimeout(()=>{
      console.log('scroll')
      // if(e){
      //   console.log(e)
      // }
      // if(isInitState === LODED ){
      //   actionIsInitState(LODING)
      // }else{
      //   actionIsInitState(LODED)
      // }
     
    },500)
  }

  document.addEventListener('DOMContentLoaded',handler);

  const removeHandler = () => {
    document.removeEventListener("scroll",scrollHandler)
    window.removeEventListener("resize",scrollHandler)
    document.removeEventListener('DOMContentLoaded',handler);
  }
  const handlerCallback = React.useCallback(removeHandler,[])
  
  React.useEffect(()=>{
    document.addEventListener("scroll",scrollHandler)
    window.addEventListener("resize",handler)
    console.log('loading..')
     return handlerCallback
  },[isInitState])

  // document.addEventListener("scroll",()=>{
  //   console.log('scroll')
  // })
  // window.addEventListener("resize",()=>{
  //   console.log('resize')
  // })
  return (
    <>
      <Header></Header>
      <ParralaxPage isInitState={isInitState}></ParralaxPage>
    </>
  );
}

export default App;
