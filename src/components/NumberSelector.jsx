import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber,setSelectedNumber] = useState();

  return (
    <NumberContainer>
     <div className="flex">
     {arrayNumber.map((value,i) => (
        <Box  
           isSelected = {selectedNumber === value}
            onClick={(()=>setSelectedNumber(value))}
        key={i}>{value}</Box>
      ))}
     </div>
     <p>Select Number</p>
    </NumberContainer>
  );
};
export default NumberSelector;
const NumberContainer = styled.div`
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
