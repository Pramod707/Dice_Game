import React from "react";
import TotalScore from "./totalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
const GamePlay = () => {
  return (

    <MainContainer>
      <div className="topSection">
      <TotalScore />
      <NumberSelector/>
      </div>
    </MainContainer>
  );
};
export default GamePlay;

const MainContainer = styled.main`
.topSection{
  display : flex;
  justify-content : space-between;
  align-items : center;
}
   
`
