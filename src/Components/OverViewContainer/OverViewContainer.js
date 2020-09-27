import React, { Fragment } from 'react';
import { OverViewText, OverviewContainer, OverviewInfo, BrandText, H2, OverViewCaret } from './OverViewStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OverView({ networks }) {

  let text = "Views";

  const valueHandler = ( brand ) => {

    switch( brand ){
      case "facebook":
        return text = "Profile Views";

      case "twitter":
        return text = "Retweets";

      case "instagram":
        return text = "Shares";

      case "youtube":
        return text = "Views";

      default: 
        return
    }
  }

  return (
    <Fragment>
      <H2>Overview - Today</H2>
      <OverviewContainer>
        {networks.map((network) => {
          const icon = network.name;
          valueHandler(icon)
          return (
            <Fragment key={icon + "-overview"}>
              <OverviewInfo>
                <OverViewText>{text}</OverViewText>
                <BrandText brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{network.views}</OverViewText>
                <OverViewCaret><FontAwesomeIcon icon={ "caret-up" }/>{(network.views/100)+'%'}</OverViewCaret>
              </OverviewInfo>
              <OverviewInfo>
                <OverViewText>Likes</OverViewText>
                <BrandText id={icon} brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{network.likes}</OverViewText>
                <OverViewCaret><FontAwesomeIcon icon={ "caret-up" }/>{(network.likes/100)+'%'}</OverViewCaret>
              </OverviewInfo>
            </Fragment>
          );
        })}
      </OverviewContainer>
    </Fragment>
  );
}

export default OverView