import React ,{useState} from 'react';
import Start from './components/Start_Game'
import GmaePly from './components/GamePlay';
function App() {

  const [isGameisStarted, setGameisStarted] = useState(false);

  function Toggle(){

     setGameisStarted((prev) => !prev);
  }
       
  return (
    <>
      {
        isGameisStarted ? <GmaePly/> : <Start  
        toggle = {Toggle}/>
         
      }
    </>
  );
}

export default App
