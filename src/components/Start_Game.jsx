import React from 'react'
import PropTypes from 'prop-types'
import styled  from 'styled-components'
const Start_Game = ({toggle}) => {
  return (
    <Container>
       <div>
        <img
           src='./src/assets/dicess.png' alt='dice'
        />
       </div>
        <div className='content'>
            <h1>Dice-Game</h1>
            <Button
              onClick={toggle}
            >Play-Now</Button>
        </div>
    </Container>
  )
}
export default Start_Game

const Container = styled.div`
  max-width: 1182;
   height : 522px;
   display : flex;
   margin : 0 auto;
   align-items: center;
   .content{
      h1{
font-size: 96px;
white-space: nowrap;
   &:hover{
   cursor : pointer;
   transition : 0.2s background ease-in;
   }
    }
   }

`;
const Button = styled.button`
color : white;
padding : 10px,18px;
background: black;
min-width: 220px;
border: none;
font-size : 25px;
transition : 0.4s background ease-in;
&:hover{
   cursor : pointer;
   background-color :hsl(193, 46.40%, 53.90%);
   transition : 0.2s background ease-in;
}

`;