import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber})=> {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

    const errorHandler=(value)=>{
      setSelectedNumber(value);
      setError("");
  
    }

  return (
    <NumberContainer>
      <p className="error">{error}</p>
     <div className="flex">
     {arrayNumber.map((value,i) => (
        <Box  
           isSelected = {selectedNumber === value}
            onClick={(()=>errorHandler(value))}
        key={i}>{value}</Box>
      ))}
     </div>
     <p>Select Number</p>
    </NumberContainer>
  );
};
export default NumberSelector;
const NumberContainer = styled.div`
     .error{
       color : red;
     }
  display : flex;
  flex-direction : column;
  align-items : end;
  gap : 24px;
    
  .flex{
    display : flex;
    gap : 24px;
  }
    p{
    font-size : 24px;
    font-weight  : 700;
    }

`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color : ${(props)=>(props.isSelected ? 'black' : 'white')};
  color : ${(props)=>(!props.isSelected ? 'black' : 'white')}
  
  
`;
