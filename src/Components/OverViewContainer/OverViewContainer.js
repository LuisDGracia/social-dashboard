import React, { Fragment } from 'react';
import { OverViewText, OverviewContainer, OverviewInfo, BrandText, H2 } from './OverViewStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OverView({ networks }) {
  return (
    <Fragment>
      <H2>Overview - Today</H2>
      <OverviewContainer>
        {networks.map((network) => {
          const icon = network.name;
          return (
            <Fragment key={icon + "-overview"}>
              <OverviewInfo>
                <OverViewText>Views</OverViewText>
                <BrandText brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{network.views}</OverViewText>
                <OverViewText>Some Text</OverViewText>
              </OverviewInfo>
              <OverviewInfo>
                <OverViewText>Likes</OverViewText>
                <BrandText id={icon} brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{network.likes}</OverViewText>
                <OverViewText>Some Text </OverViewText>
              </OverviewInfo>
            </Fragment>
          );
        })}
      </OverviewContainer>
    </Fragment>
  );
}

export default OverView