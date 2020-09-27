import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

// ###################
//    HEADER STYLES
// ###################

export const HeaderContainer = styled.div`
  width: 80%;
  height: 20%;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.laptop} {
    width: 76%;
    height: 10%;
  }
`;

export const HeaderText = styled.p`
  display: inline-block;
  width: 100%;
  ${({ theme }) => {
    return `color: ${theme.colors.text};`;
  }}
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  transition: color ${({ theme }) => theme.transition} ease-in-out;

  @media${device.laptop} {
    font-size: 2em;
  }
`;

export const HeaderSubText = styled.p`
  display: inline-block;
  width: 100%;
  ${({ theme }) => {
    return `color: ${theme.colors.text};`;
  }}
  font-size: 1em;
  opacity: 0.5;
  margin: 0;
  transition: color ${({ theme }) => theme.transition} ease-in-out;

  @media${device.laptop} {
    font-size: 1.5em;
  }
`;

export const HeaderInfo = styled.div`
  width: 80%;
`
