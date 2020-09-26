import styled from "styled-components";

// ###################
//    HEADER STYLES
// ###################

export const HeaderContainer = styled.div`
  width: 76%;
  height: 13%;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  display: inline-block;
  width: 60%;
  ${({ theme }) => {
    return `color: ${theme.colors.text};`;
  }}
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  transition: color ${({ theme }) => theme.transition} ease-in-out;
`;

export const HeaderSubText = styled.p`
  display: inline-block;
  width: 50%;
  ${({ theme }) => {
    return `color: ${theme.colors.text};`;
  }}
  font-size: 0.8em;
  opacity: 0.3;
  margin: 0;
  transition: color ${({ theme }) => theme.transition} ease-in-out;
`;

export const HeaderInfo = styled.div`
  width: 70%;
`
