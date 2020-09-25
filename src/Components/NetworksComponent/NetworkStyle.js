import styled, { keyframes } from "styled-components";

const theme = {
  dark: "#1d2d50",
  light: "#133b5c",
  text: "#fcdab7",
};

var border = {
  size: "6px",
  facebook: "#3b5998;",
  twitter: "#1da1f2;",
  instagram: "#e1306c;",
  youtube: "#ff0000;",
};

const borderBefore = keyframes`
  0%{
    top: calc( ${border.size} * -1);
    border-radius: 3px 0px 0px 0px;
  }
  50%{
    height: calc( ( ${border.size} * 2 ) + 100%);
    width: ${border.size};
    border-radius: 3px 0px 0px 3px;
  }
  100%{
    bottom: calc( ${border.size} * -1.01 );
    width: calc(${border.size} + 50%);
    height: calc( ( ${border.size} * 2 ) + 100% );
    border-radius: 3px 0px 0px 3px;
  }
`;


const borderAfter = keyframes`
  0%{
    border-radius: 0px 3px 0px 0px;
  }
  50%{
    width: ${border.size};
    height: calc( ( ${border.size} * 2 ) + 100%);
    border-radius: 0px 3px 3px 0px;
  }
  100%{
    bottom: calc( ${border.size} * -1);
    width: calc(${border.size} + 50%);
    height: calc( ( ${border.size} * 2 ) + 100% );
    border-radius: 0px 3px 3px 0px;
  }
`;
// ###################
//    BODY STYLES
// ###################

export const NetWorksContainer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
`;

export const NetWorkContainer = styled.div`
  width: 21%;
  position: relative;
  background-color: ${theme.light};
  border-radius: ${border.size};
  border: ${border.size} solid transparent;
  ${(props) => {
    switch (props.brand) {
      case "facebook":
        return `border-top: ${border.size} solid ${border.facebook}`;

      case "twitter":
        return `border-top: ${border.size} solid ${border.twitter}`;

      case "instagram":
        return `border-top: ${border.size} solid ${border.instagram}`;

      case "youtube":
        return `border-top: ${border.size} solid ${border.youtube}`;

      default:
        return (border.color = "'#fcdab7'");
    }
  }}

  
  
  &:before{
    content: "";
    position: absolute;
    display: inline-block;
    top: calc( ${border.size} * -1.01 );
    left: calc( ${border.size} * -1 );
    width: calc(${border.size} + 50%);
    height: ${border.size};
    border-radius: 10px 0 0;
    
    ${(props) => {
      switch (props.brand) {
        case "facebook":
          return `background-color: ${border.facebook}`;

        case "twitter":
          return `background-color: ${border.twitter}`;

        case "instagram":
          return `background-color: ${border.instagram}`;

        case "youtube":
          return `background-color: ${border.youtube}`;

        default:
          return (border.color = "'#fcdab7'");
      }
    }}
  }

  &:after{
    content: "";
    display: block;
    position: absolute;
    ${(props) => {
      switch (props.brand) {
        case "facebook":
          return `background-color: ${border.facebook}`;

        case "twitter":
          return `background-color: ${border.twitter}`;

        case "instagram":
          return `background-color: ${border.instagram}`;

        case "youtube":
          return `background-color: ${border.youtube}`;

        default:
          return (border.color = "'#fcdab7'");
      }
    }}
    top: calc( ${border.size} * -1);
    right: calc( ${border.size} * -1);
    width: calc( ${border.size} + 50%);
    height: ${border.size};
    border-radius: 0 10px 0 0;
  }

  &:hover:before{
    animation: ${borderBefore} 1s forwards ease-in-out;
  }

  &:hover:after{
    animation: ${borderAfter} 1s forwards ease-in-out;
  }
}
`;

export const NetWorkUtil = styled.div`
  width: 100%;
  height: 100%;
  border: solid 5px trasparent;
  display: flex;
  position: relative;
  justify-content: space-around;
  flex-flow: column wrap;
  background-color: #133b5c;
  border: 5px solid #133b5c;
  z-index: 1;
`;

export const NetworkHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const NetWorkFollowers = styled.p`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${theme.text};
  margin: 0;
  font-size: 1.5em;
`;

export const NetWorkText = styled.p`
  width: 100%;
  text-align: center;
  align-self: baseline;
  color: ${theme.text};
  margin: 0;
  font-size: 1.2em;
  opacity: 0.3;
`;

export const UserNetWork = styled.p`
  margin: 0;
  color: ${theme.text};
  align-self: center;
  font-size: 0.7em;
  padding-left: 5px;
  font-size: 1em;
  opacity: 0.8;
`;

// ###################
//    BRANDS STYLES
// ###################

export const BrandText = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 1.35em;
  margin: 0;
  font-size: 1.5em;

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
