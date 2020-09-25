import React, { Fragment } from 'react';
import { OverViewText, OverviewContainer, OverviewInfo, BrandText } from './OverViewStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OverView({ networks }) {
  return (
    <Fragment>
      <h2 style={{ margin: 0, color: "#fcdab7" }}>Overview - Today</h2>
      <OverviewContainer>
        {networks.map((network) => {
          const icon = network.name;
          return (
            <Fragment key={network.name + "-overview"}>
              <OverviewInfo>
                <OverViewText>Views</OverViewText>
                <BrandText brand={network.name}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <OverViewText>{network.views}</OverViewText>
                <OverViewText>Some Text</OverViewText>
              </OverviewInfo>
              <OverviewInfo>
                <OverViewText>Likes</OverViewText>
                <BrandText id={network.name} brand={network.name}>
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