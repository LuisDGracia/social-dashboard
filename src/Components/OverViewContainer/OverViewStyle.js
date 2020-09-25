import styled from "styled-components";

const theme = {
  dark: "#1d2d50;",
  light: "#133b5c;",
  text: "#fcdab7;",
};

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
`;

export const OverviewInfo = styled.div`
  width: 21%;
  height: 45%;
  padding: 7px;
  background-color: ${theme.light};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;

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
