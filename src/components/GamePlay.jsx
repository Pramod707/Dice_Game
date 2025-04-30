import React, { useState } from "react";
import TotalScore from "./totalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[score , setScore]= useState(1);


  const GenerateNumber = (min, max)=> {
    console.log( Math.floor(Math.random() * (max - min) ) + min)
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const roleDice = ()=>{
   const random = GenerateNumber(1,7);
   setCurrentDice(prev => random);
   if(selectedNumber === random){
    setScore(prev => prev + random);
   }else{
    setScore(prev => prev - 2);
   }

  };

   



  return (
    <>
      <MainContainer>
        <div className="topSection">
          <TotalScore />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
      </MainContainer>
    </>
  );
};
export default GamePlay;

const MainContainer = styled.main`
  padding: 70px;
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
