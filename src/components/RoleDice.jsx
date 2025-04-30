import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const RoleDice = ({currentDice, setCurrentDice}) => {


  return (
    <DiceContainer>
     <div className='dice'onClick={RoleDice}>
        <img src = {`./src/assets/D${currentDice}.png`} alt = "dice"></img>
     </div>
     <p>Roll the Dice</p>
    
    </DiceContainer>
  );
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top : 48px;
    display : flex;
    flex-direction : column;
    align-items : center;

    p{
      font-size : 25px;
      font-weight : 700;
      
    }
      .dice{
      cursor : pointer;
      }
   
`