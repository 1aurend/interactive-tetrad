import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import TetradLayout from './TetradLayout'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Store from '../src/data/Store'



export default function AppRouter({ fbInstance }) {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <DndProvider backend={HTML5Backend}>
            <TetradLayout fbInstance={fbInstance}/>
          </DndProvider>
        </Route>
      </Switch>
    </Router>
  )
}
