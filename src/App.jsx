import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
