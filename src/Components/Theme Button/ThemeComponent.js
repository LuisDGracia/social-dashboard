import React, { useContext } from 'react'
import { Input, Slider, Switch } from './ThemeStyle';
import { AppContext } from '../../AppProvider';

function Theme() {

  const { toggleTheme, themeMode } = useContext(AppContext);

  const themeHandler = () => {
    toggleTheme()
  }

  return (
    <Switch className="switch">
      <Input 
        type="checkbox" 
        className="checkbox" 
        defaultChecked = { themeMode === 'lightTheme'? true : false }
        onChange = { themeHandler }/>
      <Slider className="slider"/>
    </Switch>
  )
}

export default Theme
