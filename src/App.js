import React, { useEffect, useState, Fragment } from 'react';
import {
  Container,
  Header,
  NetWorkContainer,
  NetWorksContainer,
  NetWorkText,
  OverviewContainer,
  OverviewInfo,
  OverViewText,
  HeaderText,
  HeaderMode,
  BrandText,
  UserNetWork, NetworkHeader
} from "./AppStyles";
import axios from './axios-orders'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {

  const [networks, setNetworks] = useState([])
  library.add( fab, faFacebook, faTwitter, faInstagram, faYoutube)

  useEffect(() => {
    axios.get("/networks.json").then((response) => {
      setNetworks(response.data);
    });

  },[])
  
  return (
    <Container>
      <Header>
        <HeaderText>Social Media Dashboard</HeaderText>
        <HeaderText>Total Followers: ####</HeaderText>
        <HeaderMode>Dark Mode</HeaderMode>
      </Header>
      <NetWorksContainer>
        {networks.map((network) => {
          const icon = network.name;

          return (
            <NetWorkContainer key={network.name}>
              <NetworkHeader>
                <BrandText brand={network.name} ><FontAwesomeIcon icon={["fab", icon]} /></BrandText>
                <UserNetWork>@{network.user}</UserNetWork>
              </NetworkHeader>
              <NetWorkText>{network.followers}</NetWorkText>
              <NetWorkText>FOLLOWERS</NetWorkText>
            </NetWorkContainer>
          );
        })}
      </NetWorksContainer>
      <h2 style={{ margin: 0, color: "#fcdab7"}}>Overview - Today</h2>
      <OverviewContainer>
        {networks.map((network) => {
          const icon = network.name;
          return (
            <Fragment>
              <OverviewInfo>
                <OverViewText>Views</OverViewText>
                <BrandText brand={network.name} ><FontAwesomeIcon icon={["fab", icon]} /></BrandText>
                <OverViewText>{network.views}</OverViewText>
                <OverViewText>Some Text</OverViewText>
              </OverviewInfo>
              <OverviewInfo>
                <OverViewText>Likes</OverViewText>
                <BrandText id={network.name} brand={network.name}><FontAwesomeIcon icon={["fab", icon]} /></BrandText>
                <OverViewText>{network.likes}</OverViewText>
                <OverViewText>Some Text </OverViewText>
              </OverviewInfo>
            </Fragment>
          );
        })}
      </OverviewContainer>
    </Container>
  );
}

export default App;
