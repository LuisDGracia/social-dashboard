import React, { Fragment } from 'react';
import { OverViewText, OverviewContainer, OverviewInfo, BrandText, H2, OverViewCaret } from './OverViewStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OverView({ networks }) {

  let text = "Views";
  let conversion = "0";

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

  const handleViews = (views) => {
    conversion = `${views}`;
    if (views >= 1000 && views < 1000000) {
      conversion = `${Math.floor(views / 1000)}K`;
    } else if (views >= 1000000) {
      conversion = `${views / 1000000}M`;
    }
  };

  return (
    <Fragment>
      <H2>Overview - Today</H2>
      <OverviewContainer>
        {networks.map((network) => {
          const icon = network.name;
          handleViews(network.views);
          valueHandler(icon)
          return (
            <Fragment key={icon + "-overview"}>
              <OverviewInfo>
                <OverViewText>{text}</OverViewText>
                <BrandText brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{conversion}</OverViewText>
                <OverViewCaret><FontAwesomeIcon icon={ "caret-up" }/>{(5000/1000)+'%'}</OverViewCaret>
              </OverviewInfo>
              <OverviewInfo>
                <OverViewText>Likes</OverViewText>
                <BrandText id={icon} brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{network.likes}</OverViewText>
                <OverViewCaret><FontAwesomeIcon icon={ "caret-up" }/>{(2000/100)+'%'}</OverViewCaret>
              </OverviewInfo>
            </Fragment>
          );
        })}
      </OverviewContainer>
    </Fragment>
  );
}

export default OverView