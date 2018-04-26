import React from 'react'
import { Route, IndexRoute, Router, withRouter } from 'react-router'
import { browserHistory } from 'react-router'
import PalettesIndexContainer from './containers/PalettesIndexContainer'
import PalettesShowContainer from './containers/PalettesShowContainer'
import NavBar from './components/NavBar'
import PaletteFormContainer from './containers/PaletteFormContainer'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'  component = {NavBar}>
        <IndexRoute component={PalettesIndexContainer} />
        <Route path='/palettes/new' component={PaletteFormContainer} />
        <Route path="/palettes/:id" component={PalettesShowContainer}/>
      </Route>
    </Router>
  )
}

export default App
