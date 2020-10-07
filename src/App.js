import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'

function App () {
  return (
    <Router>
      <GlobalStyles />
      <h1>Page</h1>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
