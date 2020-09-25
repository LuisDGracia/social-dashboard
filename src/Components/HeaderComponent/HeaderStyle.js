import styled from "styled-components";

const theme = {
  dark: "#1d2d50",
  light: "#133b5c",
  text: "#fcdab7",
};

// ###################
//    HEADER STYLES
// ###################

export const HeaderContainer = styled.div`
  width: 76%;
  height: 13%;
  padding: 10px;
  margin-top: 10px;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  display: inline-block;
  width: 60%;
  color: ${theme.text};
  margin: 0;
  font-size: 2em;
  font-weight: bold;
`;

export const HeaderSubText = styled.p`
  display: inline-block;
  width: 50%;
  color: ${theme.text};
  opacity: 0.3;
  margin: 0;
`;

export const HeaderMode = styled.p`
  width: 40%;
  text-align: end;
  display: inline-block;
  color: ${theme.text};
  margin: 0;
`;
