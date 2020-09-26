import styled from "styled-components";

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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  transition: background-color ${({ theme }) => theme.transition} ease-in-out;
  ${({ theme }) => {
    return `background-color: ${theme.colors.dark};`;
  }}
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
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transition} ease-in-out;
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
        return "color: #1245af;";

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
