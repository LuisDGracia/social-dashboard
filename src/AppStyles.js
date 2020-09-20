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

// ###################
//    HEADER STYLES
// ###################

export const Header = styled.div`
  width: 80%;
  height: 10%;
  padding: 10px;
  margin-top: 10px;
  background-color: ${theme.light};
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #000;
`;

export const HeaderText = styled.p`
  display: inline-block;
  width: 40%;
  color: ${theme.text}
  margin: 0;
`;

export const HeaderMode = styled.p`
  width: 50%;
  text-align: end;
  display: inline-block;
  color: ${theme.text}
  margin: 0;
`;

// ###################
//    BODY STYLES
// ###################

export const NetWorksContainer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #000;
`;

export const NetWorkContainer = styled.div`
  width: 21%;
  padding: 10px;
  background-color: ${theme.light};
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
  border: 1px solid #000;
`;

export const NetworkHeader = styled.div`
  display:flex;
  justify-content: center;
`

export const NetWorkText = styled.p`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${theme.text}
  margin: 0;
`;

export const UserNetWork = styled.p`
  margin: 0;
  color: ${theme.text};
  align-self: center;
  font-size: 0.7em;
`;

// ###################
//    OVERVIEW STYLES
// ###################

export const OverviewContainer = styled.div`
  width: 80%;
  height: 35%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000;
`;

export const OverviewInfo = styled.div`
  width: 21%;
  height: 40%;
  padding: 5px;
  background-color: ${theme.light};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid #000;
`;

export const OverViewText = styled.p`
  display: inline-block;
  width: 50%;
  text-align: center;
  color: ${theme.text}
  margin: 0;
`;

// ###################
//    BRANDS STYLES
// ###################

export const BrandText = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 1.35em;
  margin: 0;

  ${(props) => {
    switch (props.brand) {
      case "facebook":
        return "color: #3b5998;";

      case "twitter":
        return "color: #1da1f2;";

      case "instagram":
        return "color: #e1306c;";

      case "youtube":
        return "color: #ff0000;";

      default:
        return "color: #fcdab7;";
    }
  }}
`;