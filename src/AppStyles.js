import styled from 'styled-components'
import { device } from './styles/mediaQueries'


export const Container = styled.div`
  width: 100%;
  ${({ theme }) => {
    return `background: ${theme.colors.background};`;
  }}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: background ${({ theme }) => theme.transition} ease-in-out;

  @media ${device.tablet} {
    height: 100%;
  }

  @media ${device.laptop} {
    height: 100vh;
  }
`;