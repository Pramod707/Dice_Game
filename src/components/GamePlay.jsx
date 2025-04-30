import React ,{useState}from "react";
import TotalScore from "./totalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
const GamePlay = () => {
  const [selectedNumber,setSelectedNumber] = useState();
     const [currentDice, setCurrentDice] = useState(1);
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
     <RoleDice
       currentDice = {currentDice}
       setCurrentDice = {setCurrentDice}
     />
    </MainContainer>
     </>
  );
};
export default GamePlay;

const MainContainer = styled.main`
padding : 70px;
.topSection{
  display : flex;
  justify-content : space-between;
  align-items : end;
}
   
`
