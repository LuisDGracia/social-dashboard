import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

// ###################
//    HEADER STYLES
// ###################

export const HeaderContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  display: inline-block;
  width: 100%;
  color: ${ ({ theme }) => theme.colors.text};
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  transition: color ${({ theme }) => theme.transition} ease-in-out;

  @media${device.laptop} {
    font-size: 2em;
  }
`;

export const HeaderSubText = styled(HeaderText)`
  font-size: 1.5em;
  opacity: 0.5;
  transition: color ${({ theme }) => theme.transition} ease-in-out;

  @media${device.laptop} {
    font-size: 1.5em;
  }
`;

export const HeaderInfo = styled.div`
  width: 80%;
`
