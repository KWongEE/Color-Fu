import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'
import { browserHistory } from 'react-router'
import PalettesIndexContainer from './containers/PalettesIndexContainer'
import PalettesShowContainer from './containers/PalettesShowContainer'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' >
        <IndexRoute component={PalettesIndexContainer} />
        <Route path="/palettes/:id" component={PalettesShowContainer}/>
      </Route>
    </Router>
  )
}

export default App
