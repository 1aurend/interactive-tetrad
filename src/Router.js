import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import TetradLayout from './TetradLayout'


export default function AppRouter({ fbInstance=true }) {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TetradLayout fbInstance={fbInstance}/>
        </Route>
      </Switch>
    </Router>
  )
}
