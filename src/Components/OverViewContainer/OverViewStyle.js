import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

// ###################
//    OVERVIEW STYLES
// ###################

export const OverviewContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media ${device.laptop} {
    flex-flow: column wrap;
    height: 38%;
  }
`;

export const OverviewInfo = styled.div`
  width: 45%;
  height: 100px;
  position: relative;
  margin-bottom: 15px;
  padding: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  transition: background-color ${({ theme }) => theme.transition} ease-in-out;
  ${({ theme }) => {
    return `background-color: ${theme.colors.dark};`;
  }}

  @media ${device.laptop} {
    width: 20%;
    cursor: default;
  }
`;

export const OverViewText = styled.p`
  display: inline-block;
  width: 50%;
  text-align: center;
  transition: color ${({ theme }) => theme.transition} ease-in-out;
  ${({ theme }) => {
    return `color: ${theme.colors.text};`;
  }}
  margin: 0;
`;

export const H2 = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transition} ease-in-out;

  @media ${device.laptop}{
    margin: 0;
  }
`;

export const OverViewCaret = styled.p`
  display: inline-block;
  width: 50%;
  text-align: center;
  transition: color ${({ theme }) => theme.transition} ease-in-out;
  color: green;
  margin: 0;
`;

// ###################
//    BRANDS STYLES
// ###################

export const BrandText = styled.p`
  display: inline-block;
  width: 50%;
  text-align: center;
  font-size: 1.35em;
  margin: 0;

  ${(props) => {
    switch (props.brand) {
      case "facebook":
        return "color: #1b56d1;";

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
