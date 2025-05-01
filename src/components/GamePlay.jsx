import React, { use, useState } from "react";
import TotalScore from "./totalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button , OutlineButton } from "./styled/button";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(1);
  const [error, setError] = useState();

  const GenerateNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min)) + min);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You need to select a number");
      return;
    }
    const random = GenerateNumber(1, 7);
    setCurrentDice((prev) => random);
    if (selectedNumber === random && selectedNumber > 0) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () =>{
    
      setScore(0);
     
  }
  return (
    <>
      <MainContainer>
        <div className="topSection">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
         <div className='btns'>
              <OutlineButton>Reset</OutlineButton>
              <Button>Rules</Button>
              </div>
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

  .btns{
    margin-top : 30px;
      display : flex;
      max-width : 200px;
      flex-direction : column;
      align-items : center;
      gap : 16px;
      justify-content : center;
      
    }
`;
