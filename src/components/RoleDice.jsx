import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const RoleDice = ({currentDice, setCurrentDice}) => {

  const GenerateNumber = (min, max)=> {
    console.log( Math.floor(Math.random() * (max - min) ) + min)
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const roleDice = ()=>{
   const random = GenerateNumber(1,7);
   setCurrentDice(prev => random);
  }

  return (
    <DiceContainer>
     <div className='dice'onClick={roleDice}>
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