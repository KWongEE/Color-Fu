import React from 'react'
import { Route, IndexRoute, Router, withRouter } from 'react-router'
import { browserHistory } from 'react-router'
import PalettesIndexContainer from './containers/PalettesIndexContainer'
import PaletteShowContainer from './containers/PaletteShowContainer'
import ColorPicker from './components/ColorPicker'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={PalettesIndexContainer} />
        <Route path='/palettes/new' component={ColorPicker} />
        <Route path="/palettes/:id" component={PaletteShowContainer}/>
        <Route path="*" component={PalettesIndexContainer} />
      </Route>
    </Router>
  )
}

export default App
