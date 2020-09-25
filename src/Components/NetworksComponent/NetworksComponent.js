import React from 'react'
import { NetWorkContainer, NetWorkText, NetWorksContainer, NetworkHeader, BrandText, UserNetWork, NetWorkFollowers, NetWorkUtil } from './NetworkStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Networks({ networks }) {
  return (
    <NetWorksContainer>
      {networks.map(( network) => {
        const icon = network.name;
        return (
          <NetWorkContainer key={icon} brand ={icon}>
            <NetWorkUtil>
              <NetworkHeader>
                <BrandText brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <UserNetWork>@{network.user}</UserNetWork>
              </NetworkHeader>
              <NetWorkFollowers>{network.followers}</NetWorkFollowers>
              <NetWorkText>FOLLOWERS</NetWorkText>
            </NetWorkUtil>
          </NetWorkContainer>
        );
      })}
    </NetWorksContainer>
  );
}

export default Networks
