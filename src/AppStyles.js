import styled from 'styled-components'

const theme = {
  dark: "#1d2d50;",
  light: "#133b5c;",
  text: "#fcdab7;",
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;