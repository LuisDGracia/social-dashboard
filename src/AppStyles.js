import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => {
    return `background: ${theme.colors.background};`;
  }}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: background ${({ theme }) => theme.transition} ease-in-out;
`;