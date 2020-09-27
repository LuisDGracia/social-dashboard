import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { LoadingContainer, Screen } from './LoadingStyle'

function Loading() {
  return (
    <Screen>
      <LoadingContainer>
        <FontAwesomeIcon icon={"hourglass-half"} />
      </LoadingContainer>
    </Screen>
  )
}

export default Loading
