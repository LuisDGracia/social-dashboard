import { fab, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState, Fragment } from 'react';
import OverView from './Components/OverViewContainer/OverViewContainer';
import Networks from './Components/NetworksComponent/NetworksComponent';
import Header from './Components/HeaderComponent/HeaderComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Container } from "./AppStyles";
import axios from './axios-orders';


function App() {

  const [networks, setNetworks ] = useState([]);
  
  library.add( fab, faFacebook, faTwitter, faInstagram, faYoutube)
  useEffect(() => {
    axios.get("/networks.json").then((response) => {
      setNetworks(response.data);
    });
  },[])

  const totalFollowersHandler = () => {
    let followers = 0

    networks.map( network => {
      return followers += network.followers;
    })
    return followers
  }

  return (
    <Fragment>
      { networks.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Header followers={ totalFollowersHandler() } />
          <Networks networks={ networks }/>
          <OverView networks={ networks }/>
        </Container>
      )}
    </Fragment>
  );
}

export default App;
