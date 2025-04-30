import styled from 'styled-components';

export const Button = styled.button`
color : white;
padding : 10px,18px;
background: black;
min-width: 210px;
border: none;
border-radius : 16px;
font-size : 25px;
transition : 0.4s background ease-in;
&:hover{
   cursor : pointer;
   background-color :hsl(193, 46.40%, 53.90%);
   transition : 0.2s background ease-in;
}

`;


export const OutlineButton = styled(Button)`
background-color : white;
border : 1px solid black;
color : black;
&:hover{
   cursor : pointer;
   background-color : black;
   color : white;
   border : 1px solid transparent;
   transition : 0.2s background ease-in;
}
}

`;

