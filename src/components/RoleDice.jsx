import React from 'react';
import styled from 'styled-components';
import { Button , OutlineButton} from './styled/button';

const RoleDice = ({currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`./src/assets/D${currentDice}.png`} alt="dice" />
      </div>
      <p>Roll the Dice</p>
      <div className='btns'>
      <OutlineButton>Reset</OutlineButton>
      <Button>Rules</Button>
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 25px;
    font-weight: 700;
  }

  .dice {
    cursor: pointer;
  }
    .btns{
      display : flex;
      flex-direction : column;
      gap : 16px;
      
    }
`;
