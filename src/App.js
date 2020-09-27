import { fab, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import OverView from './Components/OverViewContainer/OverViewContainer';
import Networks from './Components/NetworksComponent/NetworksComponent';
import Header from './Components/HeaderComponent/HeaderComponent';
import React, { useEffect, useState, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretUp, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { Container } from "./AppStyles";
import axios from './axios-orders';
import Loading from './Components/LoadingComponent/LoadingComponent';


function App() {

  const [networks, setNetworks ] = useState([]);
  
  library.add( fab, faFacebook, faTwitter, faInstagram, faYoutube, faCaretUp, faHourglassHalf)
  useEffect(() => {
    axios.get("/networks.json").then((response) => {
      setNetworks(response.data);
    });
  },[])

  const totalFollowersHandler = () => {
    let followers = 0

    if( networks.length > 0){
      networks.map( network => {
        return followers += network.followers;
      })
    }

    return followers
  }

  return (
    <Fragment>
      { networks.length === 0 ? (
        <Loading />
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
