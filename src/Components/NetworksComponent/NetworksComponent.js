import React from 'react'
import { NetWorkContainer, NetWorkText, NetWorksContainer, NetworkHeader, BrandText, UserNetWork, NetWorkFollowers, NetWorkUtil } from './NetworkStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Networks({ networks }) {

  let conversion = "0";

  const handleFollowers = ( followers ) => {

    if (followers >= 1000 && followers < 1000000) {
      conversion = `${Math.floor(followers / 1000)}K`;
    } else if (followers >= 1000000) {
      conversion = `${followers / 1000000}M`;
    }

  }

  return (
    <NetWorksContainer>
      {networks.map(( network) => {
        const icon = network.name;
        handleFollowers(network.followers);
        return (
          <NetWorkContainer key={icon} brand ={icon}>
            <NetWorkUtil>
              <NetworkHeader>
                <BrandText brand={icon}>
                  <FontAwesomeIcon icon={["fab", icon]} />
                </BrandText>
                <UserNetWork>@{network.user}</UserNetWork>
              </NetworkHeader>
              <NetWorkFollowers>{conversion}</NetWorkFollowers>
              <NetWorkText>FOLLOWERS</NetWorkText>
            </NetWorkUtil>
          </NetWorkContainer>
        );
      })}
    </NetWorksContainer>
  );
}

export default Networks
