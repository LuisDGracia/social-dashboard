import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

// ###################
//    OVERVIEW STYLES
// ###################

export const OverviewContainer = styled.div`
  width: 100%;
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: 1fr;
  
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 40px;
  }
`;

export const OverviewInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
  padding: 7px;
  border-radius: 10px;
  transition: background-color ${({ theme }) => theme.transition} ease-in-out;
  background-color: ${ ({ theme }) => theme.colors.dark};
  cursor: default;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const OverViewText = styled.p`
  display: inline-block;
  text-align: center;
  transition: color ${({ theme }) => theme.transition} ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const H2 = styled.h2`
  grid-column: 1 / -1;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transition} ease-in-out;
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
