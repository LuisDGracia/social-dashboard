import styled, { keyframes } from "styled-components";

const theme = {
  dark: "#1d2d50",
  light: "#133b5c",
  text: "#fcdab7",
};

const border = {
  size: '5px',
  color: '#f00'
}

const borderBefore = keyframes`
  0%{
    left: calc( ${border.size} * -1 );
    width: calc( ${border.size} + 50% );
    height: ${border.size};
  }
  33{
    left: calc( ${border.size} * -1 );
    width: ${border.size};
    height: ${border.size};
  }
  66%{
    top: calc( ${border.size} * -1.01 );
    left: calc( ${border.size} * -1 );
    width: ${border.size};
    height: calc( ${border.size} + 100% );
  }
  100%{
    top: calc( ${border.size} * -1.01 );
    left: calc( ${border.size} * -1 );
    width: calc( ${border.size} + 50% );
    height: calc( ${border.size} + 100% );
  }
`;

const borderColor = keyframes`
  0%{
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  33{
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  66%{
    border-right-color: ${border.color};
    border-bottom-color: transparent;
    border-left-color: ${border.color};
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
  border-top: ${border.size} solid #f00;

  &:before{
    content: "";
    position: absolute;
    background: #f00;
    display: inline-block;
    top: calc( ${border.size} * -1.01 );
    left: calc( ${border.size} * -1 );
    width: calc(${border.size} + 50%);
    height: ${border.size};
    border-radius: 10px 0 0;
  }

  &:after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: ${border.size};
    border-radius: 0 10px 0 0;
  }

  &:hover:before{
    animation: ${borderBefore} 1s forwards ease-in-out;
  }

  &:hover{
    animation: ${borderColor} 1s steps(1) forwards;
    outline: none;
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
