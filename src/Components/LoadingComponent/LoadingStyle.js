import styled, { keyframes } from 'styled-components'

const Rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(90deg);
  }
  50%{
    transform: rotate(180deg);
  }
  75%{
    transform: rotate(270deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Screen = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.p`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-content: center;
  font-size: 100px;

  animation: ${Rotate} 3.5s infinite ease-in-out;
  
`